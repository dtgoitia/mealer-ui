import React from 'react';
import client from './../../createClient';
import { Button, Form, Message } from 'semantic-ui-react';

import CREATE_INGREDIENT_MUTATION from './graphql/createIngredient';

class CreateIngredient extends React.Component {
  state = {
    name: '',
    unit: '',
    loading: false,
    error: false,
    errors: [],
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => this.setState({ unit: '', name: '' })
  render() {
    const { name, unit } = this.state;
    const dispatch = () => {
      this.setState({loading: true});
      client.query({
        query: CREATE_INGREDIENT_MUTATION,
        variables: { name, unit },
      }).then(result => {
        this.setState({loading: false});
        if (result.errors) {
          this.setState({ error: true, errors: result.errors });
        } else {
          this.setState({ success: true });
        }
      })
    };
    return (
      <Form sucess={this.state.success} loading={this.state.loading} error={this.state.error} onSubmit>
        <Form.Input
          placeholder='Ingredient name'
          name='name'
          value={name}
          onChange={this.handleChange}>
        </Form.Input>
        <Form.Input
          placeholder='Ingredient unit'
          name='unit'
          value={unit}
          onChange={this.handleChange}>
        </Form.Input>
        <Message success>The ingredient was successfully created. Add another ingredient or reload the page to see the updated list.</Message>
        <Message error>ERROR:
          { this.state.errors.map(e => e.message).join('\n') }
          </Message>
        <Button onClick={() => dispatch()} type='submit'>Create ingredient</Button>
      </Form>
    );
  }
}

export default CreateIngredient;
