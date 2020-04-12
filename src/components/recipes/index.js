import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { List } from 'semantic-ui-react';

// import Ingredient from './Ingredient';
import GET_RECIPES_QUERY from './graphql/getRecipes.js';
// import CreateIngredient from './CreateIngredient';

function RecipesExplorer() {
  const { loading, error, data } = useQuery(GET_RECIPES_QUERY);
  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error loading GET_RECIPES_QUERY :(</p>;

  return (
    <>
      <List divided>
        {
          data.recipes.map((recipe, i) => (
            // <Ingredient key={`ingredient-${i}`} data={ingredient}/>
            <div>{ JSON.stringify(recipe, null, 2)}</div>
          ))
        }
      </List>
      {/* <CreateIngredient /> */}
    </>
  );
}

export default RecipesExplorer;
