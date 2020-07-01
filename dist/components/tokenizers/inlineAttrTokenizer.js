"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function locateMention(value, fromIndex) {
  return value.indexOf('{', fromIndex);
}

tokenizeInlineAttr.notInLink = true;
tokenizeInlineAttr.locator = locateMention;

function tokenizeInlineAttr(eat, value, silent) {
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

var _default = tokenizeInlineAttr;
exports.default = _default;