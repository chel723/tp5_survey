// @flow

import React from 'react';

import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Choice = (props) => (
  <li>
    <Typography type="title" color="inherit">{props.name}</Typography>
    {props.vote}
    <Button color="accent">
      Voter
    </Button>
  </li>
);

const ChoiceListHelper = {
  displayChoices: (choiceList) => (
    choiceList.map(c =>
      <Choice key={c.id} name={c.name} vote={c.vote} />
    )
  ),
  addChoice: (choiceList, choiceName) => (
    [
      ...choiceList,
      {
        name: choiceName,
        vote: 0,
        percentage: null
      },
    ]
  ),
};

const ChoiceList = (props) => (
  <ul>
    {ChoiceListHelper.displayChoices(props.choices)}
  </ul>
);

export default ChoiceList;
