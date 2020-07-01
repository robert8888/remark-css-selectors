import transformer from "./components/transformAst";
import parser from "./components/attrParser";


function attacher(){

    parser.call(this);
    return transformer;
}

export default  attacher;