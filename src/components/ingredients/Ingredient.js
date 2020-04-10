import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { List, Icon } from 'semantic-ui-react';

import DELETE_INGREDIENT_MUTATION from './graphql/deleteIngredient';

function Ingredient({ data: { id, name, unit } }) {
  const [dispatch, { loading, called, error }] = useMutation(
    DELETE_INGREDIENT_MUTATION,
    { variables: { id }}
  );

  if (loading) {
    return (
      <List.Item>
        <Icon name='sync' size='large' />
        <List.Content as={Link} to={`/ingredient/${id}`}>Deleting {name} ({unit})</List.Content>
      </List.Item>
    );
  }
  
  if (error) {
    return (
      <List.Item>
        <Icon name='exclamation' size='large' />
        <List.Content as={Link} to={`/ingredient/${id}`}>Error deleting {name} ({unit})</List.Content>
      </List.Item>
    );
  }

  if (called) {
    // If deleted correctly, remove item from the list
    return null;
  }

  return (
    <List.Item>
      <Icon name='delete' size='large' onClick={dispatch} />
      <List.Content as={Link} to={`/ingredient/${id}`}>{name} ({unit})</List.Content>
    </List.Item>
  );
}

export default Ingredient;
