module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "google",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "linebreak-style": 0,
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": false,
                "MethodDefinition": false,
                "ClassDeclaration": false
            }
        }],
        "max-len": ["error", {
            "code": 200
        }],
        "new-cap": ["error", {
            "capIsNew": false
        }]
    }
};