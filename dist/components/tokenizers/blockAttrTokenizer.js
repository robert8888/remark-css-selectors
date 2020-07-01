"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function blockAttrTokenizer(eat, value, silent) {
  let match = /^{(\.|#)((?:\w|-|\s)+)}/.exec(value);

  if (match) {
    if (silent) {
      return true;
    }

    return eat(match[0])({
      type: match[1] === "#" ? 'attrId' : 'attrClass',
      value: match[2]
    });
  }
}

var _default = blockAttrTokenizer;
exports.default = _default;