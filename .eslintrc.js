module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "2019",
        sourceType: "module"
    },
    env: { node: true, es6: true },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/prefer-interface": 0
    },
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": 0,
                "@typescript-eslint/no-var-requires": 0
            },
            parserOptions: {
                sourceType: "node"
            }
        },
        {
            files: ["__tests__/**/*"],
            env: {
                node: true,
                es6: true,
                jest: true
            }
        }
    ]
};
