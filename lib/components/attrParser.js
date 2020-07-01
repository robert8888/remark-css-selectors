const blockAttrTokenizer = require("./tokenizers/blockAttrTokenizer");
const inlineAttrTokenizer = require("./tokenizers/inlineAttrTokenizer");

module.exports = attacheParserExtension;

function attacheParserExtension(){
    let Parser = this.Parser;
    let inlineTokenizers = Parser.prototype.inlineTokenizers
    let blockTokenizers = Parser.prototype.blockTokenizers;
    let inlineMethods = Parser.prototype.inlineMethods
    let blockMethods = Parser.prototype.blockMethods;

    inlineTokenizers.inlineAttr = inlineAttrTokenizer;
    blockTokenizers.blockAttr = blockAttrTokenizer;

    inlineMethods.unshift("inlineAttr");
    blockMethods.unshift("blockAttr");
}