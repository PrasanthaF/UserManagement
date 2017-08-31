module.exports = function(){
    var config = {
        allJsfiles: [
            './app/**/*.js',
            './*.js'
        ],
        temp: './temp',
        less: './css/app.css'

    };
    return config;
};