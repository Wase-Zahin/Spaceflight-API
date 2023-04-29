module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/vue3-essential",
      'airbnb-base',
      "plugin:@typescript-eslint/recommended",
      
  ],
  "overrides": [
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "parser":"@typescript-eslint/parser"
  },
  "plugins": [
      "vue",
      "@typescript-eslint"
  ],
  "rules": {
      "indent": ["error", 4],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      // "no-console": "error",
      "arrow-parens": 0,
      'no-duplicate-case': 'warn',         // 禁止出现重复case
      'no-empty': 'warn',                  // 禁止出现空语句块
      'no-extra-parens': 'warn',           // 禁止不必要的括号
      'no-func-assign': 'warn',            // 禁止对Function声明重新赋值
      'no-unreachable': 'warn',            // 禁止出现[return|throw]之后的代码块
      'no-multi-spaces': 'warn',           // 禁止使用多个空格
      'no-redeclare': 'warn',              // 禁止多次声明同一变量
      'no-return-assign': 'warn',          // 禁止在return语句中使用赋值语句
      'no-return-await': 'warn',           // 禁用不必要的[return/await]
      'no-useless-catch': 'warn',          // 禁止不必要的catch子句
      'no-useless-return': 'warn',         // 禁止不必要的return语句
      'no-mixed-spaces-and-tabs': 'warn',  // 禁止空格和tab的混合缩进
      'no-multiple-empty-lines': 'warn',   // 禁止出现多行空行
      'no-trailing-spaces': 'warn',        // 禁止一行结束后面不要有空格
      'no-useless-call': 'warn',           // 禁止不必要的.call()和.apply()
      'no-var': 'warn',                    // 禁止出现var用let和const代替
      'no-delete-var': 'off',              // 允许出现delete变量的使用
      'no-shadow': 'off',                  // 允许变量声明与外层作用域的变量同名
      'default-case': 'warn',              // 要求switch语句中有default分支
      'eqeqeq': 'warn',                    // 要求使用 === 和 !==
      'linebreak-style': ["off", "windows"]
  }
}
