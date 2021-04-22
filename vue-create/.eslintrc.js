module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
        "no-console": "off",
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "tabWidth": 4,
                "semi": false
            }
        ],
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
