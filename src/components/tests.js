import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import GET_INGREDIENTS_QUERY from '../graphql/getIngredients.js';
import logo from './../logo.svg';
import './../App.css';


function Test() {
  const { loading, error, data } = useQuery(GET_INGREDIENTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Test;
