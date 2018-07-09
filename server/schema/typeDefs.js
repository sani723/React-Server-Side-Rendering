const { gql } = require("apollo-server");

const typeDefs = gql`
  # Recipe type
  type Recipe {
    uri: String
    label: String
    image: String
    source: String
    yield: Int
  }

  type Query {
    getRecipes(limit: Int, sortField: String, sortOrder: String): [Recipe]
  }

`;

module.exports = typeDefs;
