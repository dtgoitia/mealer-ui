import gql from "graphql-tag";

const DELETE_INGREDIENT_MUTATION = gql`
mutation deleteIngredient($id: Int!) {
  deleteIngredient(id: $id) {
    success
  }
}
`;

export default DELETE_INGREDIENT_MUTATION;
