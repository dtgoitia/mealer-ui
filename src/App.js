import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import client from './createClient';
import Test from './components/tests';


function App() {
  return (
    <ApolloProvider client={client}>
      <Test/>
    </ApolloProvider>
  );
}

export default App;
