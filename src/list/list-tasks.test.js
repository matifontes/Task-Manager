import React from 'react';
import ReactDOM from 'react-dom';
import ListTasks from './list-tasks';


describe ( 'Test of list components', () => {

  it ('render components without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListTasks />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
