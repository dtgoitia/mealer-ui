import gql from "graphql-tag";

const CREATE_INGREDIENT_MUTATION = gql`
mutation createIngredient(
  $name: String!
  $unit: String!
) {
  createIngredient(
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

export default CREATE_INGREDIENT_MUTATION;
