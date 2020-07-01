const transformer = require("./components/transformAst");
const parser = require("./components/attrParser");

module.exports = attacher

function attacher(){

    parser.call(this);
    return transformer;
}