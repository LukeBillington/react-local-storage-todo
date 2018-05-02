import React, { Component, Fragment } from 'react';
import ButtonCreate from './ButtonCreate';
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: 'One', checked: false },
        { text: 'Two', checked: true },
        { text: 'Three', checked: false },
        { text: 'Four', checked: true },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <Fragment>
        <ButtonCreate />
        <ul>
          {
            Object
              .keys(todos)
              .map((key) => {
                const todo = todos[key];
                return (
                  <ListItem key={key} index={key} todo={todo} />
                );
              })
          }
        </ul>
      </Fragment>
    );
  }
}
