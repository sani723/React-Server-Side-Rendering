const _ = require("lodash");
const recipesList = require("../data/recipes.json");

const resolvers = {
  Query: {
    getRecipes: async () => {
      return await recipesList;
    }
  }
};

module.exports = resolvers;
