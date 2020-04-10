import React from 'react';

import { List } from 'semantic-ui-react';

function Ingredient({ data: { id, name, unit } }) {
  return (
    <List.Item>
      <List.Content>{name}</List.Content>
      <List.Description>{unit}</List.Description>
    </List.Item>
  );
}

export default Ingredient;
