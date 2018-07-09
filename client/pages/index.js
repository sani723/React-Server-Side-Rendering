import fetch from "isomorphic-unfetch";
import css from "./index.css";
//import recipesData from "../data/recipes.json";
import Recipes from "../components/Recipes";
import Layout from "../components/Layout";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class Index extends React.Component {
  /*static async getInitialProps() {
    return {
      recipes: recipesData
    };
  }
  */
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout>
          {/*<Recipes recipes={this.props.recipes} />*/}
          <Recipes />
        </Layout>
      </ApolloProvider>
    );
  }
}
export default Index;
