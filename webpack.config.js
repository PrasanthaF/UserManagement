//require

module.exports = {
    entry: ["./app/app.js", "./app/users/userListCtrl.js"],
    output: {
        filename: "./bundle.js"
    },
    watch :true,

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader",
                enforce: 'pre'
            }
        ]
    },
    resolve: {
        extensions: ['.js','.es6']
    }
};

