// Defining GraphQL schema in string format
const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]
  }
`;

// Exporting the schema for use in other files
module.exports = { typeDefs };
