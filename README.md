# FWD LIB DEMO

npm install -g eslint
npx eslint --init

add to vscode setting.json

```json
{
  "typescript.tsdk": "./node_modules/typescript/lib",
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
