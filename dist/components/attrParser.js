"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blockAttrTokenizer = _interopRequireDefault(require("./tokenizers/blockAttrTokenizer"));

var _inlineAttrTokenizer = _interopRequireDefault(require("./tokenizers/inlineAttrTokenizer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attacheParserExtension() {
  let Parser = this.Parser;
  let inlineTokenizers = Parser.prototype.inlineTokenizers;
  let blockTokenizers = Parser.prototype.blockTokenizers;
  let inlineMethods = Parser.prototype.inlineMethods;
  let blockMethods = Parser.prototype.blockMethods;
  inlineTokenizers.inlineAttr = _inlineAttrTokenizer.default;
  blockTokenizers.blockAttr = _blockAttrTokenizer.default;
  inlineMethods.unshift("inlineAttr");
  blockMethods.unshift("blockAttr");
}

var _default = attacheParserExtension;
exports.default = _default;