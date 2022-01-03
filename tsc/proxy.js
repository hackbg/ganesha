"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.createProgramProxy = void 0;
var path = require("path");
var ts = require("typescript/lib/tsserverlibrary");
var parse_cjs_1 = require("@ganesha/core/parse.cjs");
function createProgramProxy(options) {
    if (!options.options.noEmit && !options.options.emitDeclarationOnly)
        return doThrow('js emit is not support');
    if (!options.host)
        return doThrow('!options.host');
    if (!options.host.readDirectory)
        return doThrow('!options.host.readDirectory');
    var host = options.host;
    var readDirectory = options.host.readDirectory;
    var parseConfigHost = {
        useCaseSensitiveFileNames: host.useCaseSensitiveFileNames(),
        readDirectory: function (path, extensions, exclude, include, depth) {
            return readDirectory(path, ['.ts.md'], exclude, include, depth);
        },
        fileExists: function (fileName) { return host.fileExists(fileName); },
        readFile: function (fileName) { return host.readFile(fileName); }
    };
    var fileNames = __spreadArray(__spreadArray([], options.rootNames, true), getFileNames(), true);
    var scriptSnapshots = new Map();
    return ts.createLanguageService(__assign(__assign({}, host), { writeFile: undefined, getCompilationSettings: function () {
            options.options.allowNonTsExtensions = true;
            return options.options;
        }, getScriptFileNames: function () { return fileNames; }, getScriptVersion: function () { return ''; }, getScriptSnapshot: function (fileName) {
            // Return a snaphot if it already exists
            var scriptSnapshot = scriptSnapshots.get(fileName);
            if (scriptSnapshot) {
                return scriptSnapshot;
            }
            // Create a snapshot if it doesn't exist
            if (host.fileExists(fileName)) {
                var fileContent = host.readFile(fileName);
                if (fileContent !== undefined) {
                    // If it's a literate module, flip it
                    if (fileName.endsWith('.ts.md')) {
                        fileContent = (0, parse_cjs_1.parseString)(fileContent);
                    }
                    var scriptSnapshot_1 = ts.ScriptSnapshot.fromString(fileContent);
                    scriptSnapshots.set(fileName, scriptSnapshot_1);
                    return scriptSnapshot_1;
                }
            }
        }, getProjectVersion: function () { return ''; }, getProjectReferences: function () { return options.projectReferences; } })).getProgram();
    function getFileNames() {
        var tsConfig = options.options.configFilePath;
        if (typeof tsConfig === 'string') {
            var tsConfigFile = ts.readJsonConfigFile(tsConfig, host.readFile);
            var fileNames_1 = ts.parseJsonSourceFileConfigFileContent(tsConfigFile, parseConfigHost, path.dirname(tsConfig), options.options, path.basename(tsConfig)).fileNames;
            return fileNames_1;
        }
        return [];
    }
}
exports.createProgramProxy = createProgramProxy;
function doThrow(msg) {
    console.error(msg);
    throw msg;
}
