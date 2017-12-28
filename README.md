# FullStack Javascript: 
## Front-end : Angular 4 and Apollo Angular 1.8.1 (Client GraphQL)
## Back-end: Node.js, Express.js (API), Sequelize (ORM), GraphQL.js (API Layer) 

This is a working fork of sequelize's [express-example](https://github.com/sequelize/express-example) adapted to have additional support for interacting with the database through graphql using [graphql-sequelize](https://github.com/mickhansen/graphql-sequelize), [express-graphql](https://github.com/graphql/express-graphql) and folder structure [express-graphql-folder-structure](https://github.com/mykhailo-riabokon/express_graphql_folder_structure), [angular4-apollo-client-starter-kit](https://github.com/scaphold-io/angular4-apollo-client-starter-kit). It's meant only for illustrative purposes, and done largely for my own edification. this is the cleanest approach I found. 

## Starting front-end

```
npm run start:proxy
```
## Starting back-end

```
npm run backend
```

run in different tabs of terminal this command.

## GraphQL

GraphiQL is included through express-graphql, and can be accessed in your browser at http://localhost:8088/graphql.

All of the magic to adapt the sequelize schema to a GraphQL schema takes places in `./graphql/index.js`.


###### There are two GraphQL queries included here. Here are examples:

Get all authors, list their ids.
```
{
  authors{
    id
  }
}
```

## Angular Apollo

enter http://localhost:4200/#/login  and you can get the authors' response.
