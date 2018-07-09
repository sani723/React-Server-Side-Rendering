const _ = require("lodash");
const recipesList = require("../data/recipes.json");

const resolvers = {
  Query: {
    getRecipes: async (parent, args, context, info) => {
      console.log(`${args.offset} - ${args.limit}`);
      return await recipesList.slice(args.offset, args.limit);
    }
  }
};

module.exports = resolvers;
