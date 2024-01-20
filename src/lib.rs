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

#[wasm_bindgen]
pub struct ModuleTransformer(ModuleTransformerImpl);

#[wasm_bindgen] impl ModuleTransformer {
    #[wasm_bindgen(constructor)]
    pub fn new () -> ModuleTransformer {
        Self(ModuleTransformerImpl::new())
    }
    #[wasm_bindgen]
    pub fn transform (&self, path: String, source: String) -> Result<String, js_sys::Error> {
        self.0.transform(path, source)
    }
}

pub(crate) struct ModuleTransformerImpl(Allocator);

impl ModuleTransformerImpl {
    pub fn new () -> ModuleTransformerImpl {
        Self(Allocator::default())
    }
    pub fn transform (&self, path: String, source: String) -> Result<String, js_sys::Error> {
        let source_type = SourceType::from_path(&path).unwrap();
        let ret = Parser::new(&self.0, &source, source_type).parse();
        if !ret.errors.is_empty() {
            for error in ret.errors {
                let error = error.with_source_code(source.clone());
                println!("{error:?}");
            }
            return Err(Error::new("parse error"));
        }
        let semantic = SemanticBuilder::new(&source, source_type)
            .with_trivias(ret.trivias)
            .build(&ret.program)
            .semantic;
        let program = self.0.alloc(ret.program);
        Transformer::new(&self.0, source_type, semantic, TransformOptions {
            target: TransformTarget::ES2024,
            ..TransformOptions::default()
        }).build(program).unwrap();
        Ok(Codegen::<false>::new(source.len(), CodegenOptions).build(program))
    }
}

#[cfg(test)] mod test {
    use super::*;
    #[test] fn test_transform () {
        let transformer = ModuleTransformerImpl::new();
        let path = "foo.mjs".to_string();
        let source = "console.log('hello world');\n".to_string();
        assert_eq!(transformer.transform(path, source.clone()), Ok(source.clone()));
    }
}
