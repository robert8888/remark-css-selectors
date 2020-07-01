"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _unistUtilFilter = _interopRequireDefault(require("unist-util-filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformer(tree, file) {
  const modify = node => {
    if (!node.children) return node;
    let className = null;
    let id = null;
    const children = [];
    node.children.forEach(child => {
      if (child.type === 'attrClass') {
        className = child.value;
        return;
      }

      if (child.type === "attrId") {
        id = child.value;
        return;
      }

      if ((className || id) && !(child.data && child.data.hProperties)) {
        child.data = {
          hProperties: {}
        };
      }

      if (className) {
        child.data.hProperties.className = className;
        className = null;
      }

      if (id) {
        child.data.hProperties.id = id;
        id = null;
      }

      if (child.children && child.children.length) {
        child = modify(child);
      }

      children.push(child);
    });
    node.children = children;
    return node;
  }; //console.log("befre mod", tree)


  tree = modify(tree);
  tree = (0, _unistUtilFilter.default)(tree, node => node.type !== "attrClass" && node.type !== "attrId" && node.type === "text" && node.value === "");
  return tree;
}

var _default = transformer;
exports.default = _default;