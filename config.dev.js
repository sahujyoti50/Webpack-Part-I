const path = require('path');
module.exports = {
    mode: "development",
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3500
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    }
}