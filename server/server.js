const express = require('express');
const path = require('path');
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./schemas/resolvers')

const db = require('./config/connection');
const routes = require('./routes');
const apolloServer = new ApolloServer({ typeDefs, resolvers })

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', async () => {
  await apolloServer.start()

  app.use(expressMiddleware(apolloServer))
  console.log(`Apollo GraphQL Playground at http://localhost:${PORT}/graphql`)

  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
