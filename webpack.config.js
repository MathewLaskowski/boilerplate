module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'main.js'
    },
    module: {

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        },
        historyApiFallback: true,
        contentBase: './'
    }
}