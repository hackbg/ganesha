use crate::*;

#[test] fn test_transform () {
    let transformer = ModuleTransformerImpl::new();
    let path = "foo.mjs".to_string();
    let source = "console.log('hello world');\n".to_string();
    assert_eq!(transformer.transform(path, source.clone(), None), Ok(source.clone()));
}

#[test] fn test_source_map () {
    let allocator = Allocator::default();
    let source = include_str!("../tests/typescript.test.ts");
    let transform_options = TransformOptions {
        target: TransformTarget::ES2015,
        instanceof: false,
        ..TransformOptions::default()
    };
    let source_type = SourceType::default()
        .with_module(true)
        .with_typescript(true);
    let ret = Parser::new(&allocator, &source, source_type).parse();
    let semantic = SemanticBuilder::new(&source, source_type)
        .with_trivias(ret.trivias)
        .build(&ret.program)
        .semantic;
    println!("\n---SOURCE---\n{}\n{:#?}", &source, &ret.program);
    let program = allocator.alloc(ret.program);
    Transformer::new(&allocator, source_type, semantic, transform_options)
        .build(program)
        .unwrap();
    let output = Codegen::<false>::new(source.len(), CodegenOptions)
        .build(program);
    println!("\n---TARGET---\n{}\n{:#?}", &output, &program);
    assert_eq!(true, false);
}
