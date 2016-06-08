module.exports = {
    entry: {
      'admin':'./src/admin/admin.js',
      'home':'./src/home/home.js'
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
            },
            /*,
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }  */
        ]
    }
}
