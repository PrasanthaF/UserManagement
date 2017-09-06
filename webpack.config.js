//require

module.exports = {
    entry: ["./app/app.js", "./app/users/userListCtrl.js"],
    output: {
        filename: "./bundle.js"
    },
    watch :true
}

