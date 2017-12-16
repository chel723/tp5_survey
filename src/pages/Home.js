// @flow

import React, { Component } from 'react';

import styled from 'styled-components';

import ChoiceList from "../components/ChoiceList";
import AddChoiceForm from "../components/AddChoiceForm";

const Container = styled.div`
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const Content = styled.div`
  text-align:center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 100px;
  overflow-y: scroll;
  @media (max-width: 1100px) {
    padding: 60px 0;
  }
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      choices: [
        {id: 1, name: "Football", vote: 1, percentage: null},
        {id: 2, name: "Natation", vote: 7, percentage: null},
        {id: 3, name: "Cyclisme", vote: 5, percentage: null}
      ],
    };
  };

  addChoice = (choiceName) => {
    const newChoiceList = [
      ...this.state.choices,
      {
        id: Math.floor((Math.random() * 1000) +1),
        name: choiceName,
        vote: 1,
        percentage:null
      },
    ];
    this.setState({choices: newChoiceList});
  };

  render() {
    return (
      <Container>
        <Content>
          <h1>Questionnaire</h1>
          <h2>Quelle est votre sport préféré ?</h2>
          <AddChoiceForm addNewChoice={this.addChoice} />
          <ChoiceList choices={this.state.choices} />
        </Content>
      </Container>
    );
  }
}

export default Home;
