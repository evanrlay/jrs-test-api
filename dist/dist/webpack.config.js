var path = require('path');
module.exports = {
    entry: './index.ts',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'api.bundle.js'
    }
};
//# sourceMappingURL=webpack.config.js.map
//# sourceMappingURL=webpack.config.js.map