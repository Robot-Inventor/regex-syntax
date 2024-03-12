module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "./index.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};