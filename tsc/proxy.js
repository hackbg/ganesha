"use strict";
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
var path_1 = require("path");
var ts = require("typescript/lib/tsserverlibrary");
var patches_1 = require("./patches");
function createProgramProxy(options) {
    validateOptions(options);
    (0, patches_1.patchTypeScript)(ts);
    var langServHost = (0, patches_1.getShimmedHost)(options.host, options, getFileNames(options));
    var langServ = ts.createLanguageService(langServHost);
    var program = (0, patches_1.patchProgram)(langServ.getProgram());
    return program;
}
exports.createProgramProxy = createProgramProxy;
function validateOptions(options) {
    if (!options.options.noEmit && !options.options.emitDeclarationOnly) {
        return doThrow('js emit is not support');
    }
    if (!options.host) {
        return doThrow('!options.host');
    }
    if (!options.host.readDirectory) {
        return doThrow('!options.host.readDirectory');
    }
}
function getFileNames(_a) {
    var host = _a.host, options = _a.options, rootNames = _a.rootNames;
    var useCaseSensitiveFileNames = host.useCaseSensitiveFileNames, readDirectory = host.readDirectory, fileExists = host.fileExists, readFile = host.readFile;
    var configFilePath = options.configFilePath;
    if (typeof configFilePath === 'string') {
        var parseConfigHost = {
            useCaseSensitiveFileNames: useCaseSensitiveFileNames(),
            readDirectory: function (path, _extensions, exclude, include, depth) {
                return readDirectory(path, ['.ts.md'], exclude, include, depth);
            },
            fileExists: function (fileName) {
                return fileExists(fileName);
            },
            readFile: function (fileName) {
                return readFile(fileName);
            }
        };
        return rootNames.concat(ts.parseJsonSourceFileConfigFileContent(ts.readJsonConfigFile(configFilePath, readFile), parseConfigHost, (0, path_1.dirname)(configFilePath), options, (0, path_1.basename)(configFilePath)).fileNames);
    }
    else {
        return __spreadArray([], rootNames, true);
    }
}
function doThrow(msg) {
    console.error(msg);
    throw msg;
}
