// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('add a choice to my list',()=>{
  const initalChoiceList = [
    {id:1, name: 'First Choice', vote: 1, percentage: null},
    {id:2, name: 'Second Choice', vote: 1, percentage: null}
  ]
  expect(newChoice).toEqual(expectedChoice);
});

it('add a choice using helper',()=>{
  const initalChoiceList =[
    {id:1, name: 'First Choice', vote: 1, percentage: null},
    {id:2, name: 'Second Choice', vote: 1, percentage: null}
  ]
  const expectedChoice = [...initalChoiceList];

  choiceHelper.addChoice(initalChoiceList,2);
  expect(initalChoiceList).toEqual(expectedChoice);
  
});