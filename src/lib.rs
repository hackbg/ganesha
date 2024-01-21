extern crate console_error_panic_hook;
extern crate js_sys;
extern crate wasm_bindgen;
#[cfg(test)] extern crate wasm_bindgen_test;

use wasm_bindgen::prelude::wasm_bindgen;
use js_sys::Error;
use oxc_allocator::Allocator;
use oxc_codegen::{Codegen, CodegenOptions};
use oxc_parser::Parser;
use oxc_semantic::SemanticBuilder;
use oxc_span::SourceType;
use oxc_transformer::{Transformer, TransformOptions, TransformTarget};
use tsconfig::{TsConfig, Target};
#[cfg(feature = "debug")] use web_sys::console;

#[wasm_bindgen]
pub struct ModuleTransformer(ModuleTransformerImpl);

#[wasm_bindgen] impl ModuleTransformer {
    #[wasm_bindgen(constructor)]
    pub fn new () -> ModuleTransformer {
        console_error_panic_hook::set_once();
        Self(ModuleTransformerImpl::new())
    }
    #[wasm_bindgen]
    pub fn transform (
        &self,
        path: String,
        source: String,
        tsconfig: Option<String>
    ) -> Result<String, js_sys::Error> {
        self.0.transform(path, source, tsconfig)
    }
}

pub(crate) struct ModuleTransformerImpl(Allocator);

impl ModuleTransformerImpl {

    pub fn new () -> ModuleTransformerImpl {
        Self(Allocator::default())
    }

    pub fn transform (
        &self,
        _path: String,
        source: String,
        tsconfig: Option<String>
    ) -> Result<String, js_sys::Error> {
        // Parse tsconfig if passed
        let tsconfig = tsconfig.map(|src|TsConfig::parse_str(&src).unwrap());
        let target = tsconfig
            .and_then(|config|config.compiler_options)
            .and_then(|compiler_options|compiler_options.target)
            .and_then(|target|Some(match target {
                Target::Es3    => TransformTarget::ES3,
                Target::Es5    => TransformTarget::ES5,
                Target::Es6    => TransformTarget::ES2015,
                Target::Es2015 => TransformTarget::ES2015,
                Target::Es7    => TransformTarget::ES2016,
                Target::Es2016 => TransformTarget::ES2016,
                Target::Es2017 => TransformTarget::ES2018,
                Target::Es2018 => TransformTarget::ES2018,
                Target::Es2019 => TransformTarget::ES2019,
                Target::Es2020 => TransformTarget::ES2020,
                Target::EsNext => TransformTarget::ESNext,
                Target::Other(other) => match other.to_lowercase().as_str() {
                    "es2021" => TransformTarget::ES2021,
                    "es2022" => TransformTarget::ES2022,
                    _ => TransformTarget::ES3
                },
            }))
            .unwrap_or(TransformTarget::ES3);

        let transform_options = TransformOptions {
            target,
            instanceof: false,
            ..TransformOptions::default()
        };
        // Currently we only support TS modules.
        let source_type = SourceType::default()
            .with_module(true)
            .with_typescript(true);
        // Source -> TS AST
        let ret = Parser::new(&self.0, &source, source_type).parse();
        if !ret.errors.is_empty() {
            for error in ret.errors {
                let error = error.with_source_code(source.clone());
                return Err(Error::new(&format!("Parse error: {error:?}")));
            }
        }
        // TS AST -> JS AST
        let semantic = SemanticBuilder::new(&source, source_type)
            .with_trivias(ret.trivias)
            .build(&ret.program)
            .semantic;
        let program = self.0.alloc(ret.program);
        Transformer::new(&self.0, source_type, semantic, transform_options)
            .build(program)
            .unwrap();
        #[cfg(feature = "debug")] console::log_1(&format!("{}\n{}", &ret.program, &program).into());
        // JS AST -> Output
        let output = Codegen::<false>::new(source.len(), CodegenOptions)
            .build(program);
        Ok(output)
    }
}

#[cfg(test)] mod test {
    use super::*;
    #[test] fn test_transform () {
        let transformer = ModuleTransformerImpl::new();
        let path = "foo.mjs".to_string();
        let source = "console.log('hello world');\n".to_string();
        assert_eq!(transformer.transform(path, source.clone(), None), Ok(source.clone()));
    }
}
