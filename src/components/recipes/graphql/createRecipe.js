import gql from "graphql-tag";

const CREATE_RECIPE_MUTATION = gql`
mutation createRecipe(
  $name: String!
  $unit: String!
) {
  createRecipe(
    name: $name
    unit: $unit
  ) {
    ingredient {
      id
      name
      unit
    }
  }
}
`;

export default CREATE_RECIPE_MUTATION;
