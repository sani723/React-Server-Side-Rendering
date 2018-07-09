const { gql } = require("apollo-server");

const typeDefs = gql`
  # Recipe type
  type Recipe {
    id: ID! # Unique id for user
    uri: String
    label: String
    image: String
    source: String
    yield: Int
  }

  type Query {
    getRecipes(
      offset: Int
      limit: Int
      sortField: String
      sortOrder: String
    ): [Recipe]
  }

`;

module.exports = typeDefs;
