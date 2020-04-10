import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { List } from 'semantic-ui-react';

import Ingredient from './Ingredient';
import GET_INGREDIENTS_QUERY from './graphql/getIngredients.js';
import CreateIngredient from './CreateIngredient';

function IngredientExplorer() {
  const { loading, error, data } = useQuery(GET_INGREDIENTS_QUERY);
  if (loading) return <p>Loading ingredients...</p>;
  if (error) return <p>Error loading GET_INGREDIENTS_QUERY :(</p>;

  return (
    <>
      <List divided>
        {
          data.ingredients.map((ingredient, i) => (
            <Ingredient key={`ingredient-${i}`} data={ingredient}/>
          ))
        }
      </List>
      <CreateIngredient />
    </>
  );
}

export default IngredientExplorer;
