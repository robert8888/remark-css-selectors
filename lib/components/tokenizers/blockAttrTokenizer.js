module.exports = blockAttrTokenizer;

function blockAttrTokenizer(eat, value, silent) {
    let match = /^{(\.|#)((?:\w|-|\s)+)}/.exec(value)
    if (match) {
        if (silent) {
            return true
        }
        return eat(match[0])({
            type: (match[1] === "#") ? 'attrId' : 'attrClass',
            value: match[2]
        })
    }
}
