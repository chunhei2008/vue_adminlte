module.exports = {
    entry: {
        'admin': './src/admin/admin.js',
        'home': './src/home/home.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        chunkFilename: "[id].app.js?[chunkhash]",
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
