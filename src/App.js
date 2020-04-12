import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import client from './createClient';
import IngredientExplorer from './components/ingredients';
import RecipesExplorer from './components/recipes';

function IngredientEditor() {
  let { ingredientId } = useParams();
  return <div>Ingredient #{ingredientId}!!</div>;
}

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/">
            <IngredientExplorer/>
          </Route>
          <Route exact path="/ingredients">
            <IngredientExplorer/>
          </Route>
          <Route path="/ingredient/:ingredientId">
            <IngredientEditor/>
          </Route>
          <Route exact path="/recipes">
            <RecipesExplorer/>
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
