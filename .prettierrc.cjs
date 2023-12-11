module.exports =  {
    semi: true,
    trailingComma:  'all',
    singleQuote:  true,
    printWidth:  120,
    useTabs: false, //使用空格代替tab缩进
    semi: true, //句末使用分号
    tabWidth:  2,
    // 格式与eslint的overrides一致
    "overrides": [
        {
            "files": "*.json",
            "options": {
                tabWidth:  2
            }
        },
        {
            "files": ["*.html", "legacy/**/*.js"],
            "options": {
                printWidth:  240
            }
        }
    ]
};