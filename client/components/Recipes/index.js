import Recipe from "./RecipeListItem";
import css from "./Recipes.css";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const getRecipesQuery = gql`
  {
    getRecipes {
      image
      label
    }
  }
`;

class Recipes extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/*this.props.recipes.hits.map((item, index) => (
            <Recipe key={index} item={item} />
          ))*/}

          <Query query={getRecipesQuery}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :( {error}</p>;

              //console.log(data);
              return data.getRecipes.map((item, index) => (
                <Recipe key={index} item={item} />
              ));
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Recipes;
