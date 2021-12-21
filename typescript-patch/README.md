Current override targets:
* **`resolveModuleName`**
+ **`resolveExternalModule`**

---

* executeCommandLineWorker
  * performIncrementalCompilation
    * createIncrementalCompilerHost
    * performIncrementalCompilation
  * performCompilation
    * createProgram
      * createProgramOptions.host
      * createCompilerHost
        * createCompilerHostWorker
          * `createGetCanonicalFileName` -> case sensitivity
          * getSourceFile
            * compilerHost.readFile
      * host.resolveModuleNames
      * createModuleResolutionCache
      * host.resolveTypeReferenceDirectives
      * createTypeReferenceDirectiveResolutionCache
    * emitFilesAndReportErrorsAndGetExitStatus

* nodeModuleNameResolverWorker
  * tryResolve
    * loadModuleFromImports
      * loadModuleFromImportsOrExports
        * getLoadModuleFromTargetImportOrExport

* An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead
  * resolveExternalModule
    * resolutionExtensionIsTSOrJson
    * resolveExternalModuleWorker

```
Trace: here
    at resolveExternalModule
    at resolveExternalModuleNameWorker
    at resolveExternalModuleName
    at getTargetOfImportClause
    at getTargetOfAliasDeclaration
    at resolveAlias
    at checkAliasSymbol
    at checkImportBinding
    at checkImportDeclaration
    at checkSourceElementWorker
```

* Cannot_find_module_0_or_its_corresponding_type_declarations

```
[user@nixos:~/Lab/2/ganesha/typescript-patch]$ node_modules/.bin/tsc foo.ts 
Trace: resolveExternalModuleName
    at resolveExternalModuleName
    at getTargetOfImportClause
    at getTargetOfAliasDeclaration
    at resolveAlias
    at checkAliasSymbol
    at checkImportBinding 
    at checkImportDeclaration
    at checkSourceElementWorker
    at checkSourceElement
    at Object.forEach
```
