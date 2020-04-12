import gql from "graphql-tag";

const GET_RECIPE_QUERY = gql`
{
  recipes {
    id
    name
    unit
  }
}
`;

export default GET_RECIPE_QUERY;
