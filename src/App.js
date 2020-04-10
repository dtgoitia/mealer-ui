import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import 'semantic-ui-css/semantic.min.css';

import client from './createClient';
import IngredientExplorer from './components/ingredients';

function App() {
  return (
    <ApolloProvider client={client}>
      <IngredientExplorer/>
    </ApolloProvider>
  );
}

export default App;
