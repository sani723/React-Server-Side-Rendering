const _ = require("lodash");
const RecipeModel = require("../models/recipe");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const recipesList = require("../data/recipes.json");

const resolvers = {
  Query: {
    getRecipes: (parent, args, context, info) => {
      //console.log(`${args.offset} - ${args.limit}`);
      //return await recipesList.slice(args.offset, args.limit);
      return RecipeModel.find(
        {},
        null,
        { limit: args.limit, skip: args.offset },
        function(err, data) {
          return data;
        }
      );
    }
  }
};

module.exports = resolvers;
