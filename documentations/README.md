# Documentations

## Code untuk db diagram

<details>

```bash
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table authors {
  id integer [primary key]
  pen_name varchar 
  profileId integer
  userId integer
  createdAt timestamp
  updatedAt timestamp 
}

Table profiles {
  id integer [primary key]
  fullname varchar
  image varchar
  age varchar
  nationality varchar
  gender varchar
  createdAt timestamp
  updatedAt timestamp
}

Table users {
  id integer [primary key]
  username varchar
  email varchar
  password varchar
  role varchar
  profileId integer
  createdAt timestamp
  updatedAt timestamp
}

Table books{
  id integer [primary key]
  title varchar
  description varchar
  year integer
  page integer
  stock integer
  image varchar
  authorId integer
  genreId integer
  userId integer
  status varchar
  createdAt timestamp
  updatedAt timestamp
}

Table genres {
  id integer [primary key]
  name varchar
  userId integer
  createdAt timestamp
  updatedAt timestamp
}

Ref: authors.profileId - profiles.id // many-to-one
Ref: users.profileId - profiles.id
Ref: books.userId > users.id
Ref: books.authorId > authors.id
Ref: books.genreId > genres.id
Ref: authors.userId > users.id
Ref: genres.userId > users.id


```
</details>

swwn>