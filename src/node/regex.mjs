export const
  FILE_FROM_MODULE    = new RegExp("^[^@]([^/]+)/(.+)"),
  FILE_FROM_MODULE_NS = new RegExp("^(@[^/]+/[^/]+)/(.+)"),
  CANNOT_FIND_MODULE  = /Cannot find module '(.+)'/,
  CANNOT_FIND_PACKAGE = /Cannot find package '(.+)'/
