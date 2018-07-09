const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: Schema.Types.ObjectId,
  uri: String,
  label: String,
  image: String,
  source: String,
  yield: Number
});

module.exports = mongoose.model("Recipe", recipeSchema);
