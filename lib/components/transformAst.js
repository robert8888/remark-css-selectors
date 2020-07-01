const filter = require('unist-util-filter')

module.exports = transformer;

function transformer(tree, file){
    const modify = node => {
        if(!node.children) return node;
        let className = null;
        let id = null;
        const children = [];
        node.children.forEach(child=> {
            if(child.type === 'attrClass'){
                className = child.value;
                return;
            }
            if(child.type === "attrId"){
                id = child.value;
                return;
            }
            if((className || id) && !(child.data && child.data.hProperties)) {
                child.data = {
                    hProperties: {}
                }
            }
            if(className){
                child.data.hProperties.className = className;
                className = null;
            }
            if(id){
                child.data.hProperties.id = id;
                id = null;
            }
            if(child.children && child.children.length){
                child = modify(child);
            }
            children.push(child);
        })

        node.children = children;
        return node;
    }
    //console.log("befre mod", tree)
    tree = modify(tree)

    tree = filter(tree, node => (
        (node.type !== "attrClass") &&
        (node.type !== "attrId") &&
        (node.type === "text" && node.value === "")
    ))

    return tree;
}

