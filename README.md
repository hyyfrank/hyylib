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

<!-- "type": "commonjs", change to module if want to build to dist folder. -->

1. Customize Type define generate
2. publish to azure npm
3. load from an create react app and test load in demand
4. add MUI and storybook
5. add theme provider and cusomize how to override the component.
