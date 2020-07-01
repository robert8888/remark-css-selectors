"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transformAst = _interopRequireDefault(require("./components/transformAst"));

var _attrParser = _interopRequireDefault(require("./components/attrParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attacher() {
  _attrParser.default.call(this);

  return _transformAst.default;
}

var _default = attacher;
exports.default = _default;