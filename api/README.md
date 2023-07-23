# Api

## Packages

1. Server

- Express.js

2. DBMS

- PG
- Sequelize dan Sequelize-cli

3. Environtment

- Dotenv

4. Authentication

- Bcrypt
- Jsonwebtoken

5. Upload files

- Multer

6. Run apps

- nodemon

7. Convert ES6 ke atas menjadi ES level 5

- babel

```bash
 npm install @babel/core @babel/node @babel/preset-env --save-dev
```

Buatlah file `.babelrc`, lalu isi dengan codingan berikut :

```js

{
    "presets": [
      ["@babel/env", {
        "targets": {
          "node": "current"
        }
      }]
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread"
    ]
  }
```
