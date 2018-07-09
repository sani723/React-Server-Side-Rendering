import css from "./Recipes.css";

const RecipeListItem = ({ item }) => {
  return (
    <div className="col-xs-12 col-sm-2">
      <div className={css.recipe}>
        <img className={css.imgResponsive} src={item.image} alt={item.label} />
        <div className={css.recipe__meta}>
          <span>{item.label}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeListItem;
