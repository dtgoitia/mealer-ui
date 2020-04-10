import gql from "graphql-tag";

const GET_INGREDIENTS_QUERY = gql`
{
  ingredients {
    id
    name
    unit
  }
}
`;

export default GET_INGREDIENTS_QUERY;
