import Recipe from "./RecipeListItem";
import css from "./Recipes.css";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_RECIPES_QUERY = gql`
  query GetRecipes($offset: Int, $limit: Int) {
    getRecipes(offset: $offset, limit: $limit) {
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
          <Query
            query={GET_RECIPES_QUERY}
            variables={{
              offset: 0,
              limit: 12
            }}
            notifyOnNetworkStatusChange
          >
            {({ loading, error, data, fetchMore }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :( {error}</p>;

              return (
                <React.Fragment>
                  <div className="cta-wrapper">
                    <button
                      onClick={() =>
                        fetchMore({
                          variables: {
                            offset: data.getRecipes.length
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return Object.assign({}, prev, {
                              getTweets: [
                                ...prev.getRecipes,
                                ...fetchMoreResult.getRecipes
                              ]
                            });
                          }
                        })
                      }
                    >
                      Next
                    </button>
                  </div>
                  {data.getRecipes.map((item, index) => (
                    <Recipe key={index} item={item} />
                  ))}
                </React.Fragment>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Recipes;
