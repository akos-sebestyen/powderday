module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "cypress/globals": true
    },
    "ignorePatterns": [
        ".eslintrc.js",
        "next-env.d.ts"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "cypress"
    ],
    "rules": {
        "no-multiple-empty-lines": [
            "error",

        ],
        "react/jsx-pascal-case": ["error"],
        "react/react-in-jsx-scope": "off", // not needed because of nextjs
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
