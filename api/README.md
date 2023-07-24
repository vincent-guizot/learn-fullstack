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


## Sequelize Command

1. npx sequelize-cli inti

2. npx sequelize-cli db:create

3. Migration

```
npx sequelize-cli model:generate --name author --attributes pen_name:string,profileId:integer,userId:integer
npx sequelize-cli model:generate --name book --attributes title:string,description:string,year:integer,page:integer,stock:integer,price:integer,image:string,status:string,authorId:integer,userId:integer,genreId:integer
npx sequelize-cli model:generate --name profile --attributes fullname:string,image:string,age:integer,nationality:string,gender:string
npx sequelize-cli model:generate --name genre --attributes name:string,userId:integer
npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,role:string,profileId:integer
```

4. npx sequelize-cli db:migrate

5. npx sequelize-cli seed:generate --name seed-books