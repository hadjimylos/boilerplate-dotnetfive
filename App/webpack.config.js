var isDevMode = true;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    // export stats.json only when errors occur
    stats: 'errors-only',

    optimization: {
        mergeDuplicateChunks: true,
    },

    plugins: [
        // export css into css file
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'screen.css',
        }),

    ],

    // list of files to bring in in-order
    entry: [
        // loads in all our js files
        './FrontEnd/js/main',
        './FrontEnd/css/screen.less',
    ],

    // output bundled items in entry to output location
    output: {

        // full path to output files
        path: __dirname + '/wwwroot/',

        // name js files get bundled to
        filename: './bundle.js',

        // set base path for assets (images, fonts, etc.)
        publicPath: './wwwroot/assets',
    },

    // watch listens for changes and applies automatically
    watch: isDevMode,

    module: {

        // add in loaders (npm packages and how they should be used)
        rules: [

            // less loader
            {
                test: /\.less$/,
                exclude: /node_modules/,

                // export into css file instead of inject inline html 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ]
            },
        ]
    },

    resolve: {

        // types of files we can process without specifying file extention (only js by default)
        // e.g. require('./login') can resolve to login, login.js and login.es6 files according to below  
        extensions: ['.js']

    }
}

if (isDevMode) {
    // if dev mode add these
    module.exports.mode = 'development';

    module.devtool = 'source-map';
} else {
    // if prod mode add these
    module.exports.mode = 'production';
}
