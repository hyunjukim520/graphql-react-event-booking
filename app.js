const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

const graphQlSchema = require("./graphql/schema");
const graphQlResolvers = require("./graphql/resolvers");

const app = express();
const uid = "5cfe5dafa4070a3db088f9a1";

app.use(bodyParser.json());

// query: fetching data: select
// mutation: changing data create,update,delete
app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0-stl4m.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority
`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch(err => {
    console.log(err);
  });
