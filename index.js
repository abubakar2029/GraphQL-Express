const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema.js");
const db = require("./_db");

// Defining resolvers
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
  },
};

// Setting up the server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Starting the server and listening on port 4000
startStandaloneServer(server, { listen: { port: 4000 } })
  .then(({ url }) => {
    console.log(`Server ready at: ${url}`);
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
  });
