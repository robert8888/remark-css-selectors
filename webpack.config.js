module.exports = {
    mode: "production",
    entry: {
        index: './lib/index.js'
    },
    output : {
        filename: 'index.js',
        path: __dirname + '/dist'
    }
};