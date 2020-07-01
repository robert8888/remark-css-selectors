import blockAttrTokenizer from "./tokenizers/blockAttrTokenizer";
import inlineAttrTokenizer  from "./tokenizers/inlineAttrTokenizer";


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

export default  attacheParserExtension;