const path = require('path');
module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'prod.js'
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