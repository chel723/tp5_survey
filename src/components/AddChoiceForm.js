// @flow

import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class AddChoiceForm extends Component {
  constructor() {
    super();
    this.state = {
      newChoiceName: ''
    };
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          id={"1"}
          label="Nouvelle proposition"
          placeholder="Ajout de la proposition"
          value={this.state.newChoiceName}
          onChange={this.changeName}
          margin="normal"
          required
        />
        <Button color="accent" onClick={this.addChoice}>Ajouter</Button>
      </form>
    )
  };

  changeName = (event) => {
    this.setState({newChoiceName: event.target.value.toUpperCase()});
  };

  addChoice = () => {
    this.props.addNewChoice(this.state.newChoiceName);
    this.setState({newChoiceName: ''});
  };
};

export default AddChoiceForm;
