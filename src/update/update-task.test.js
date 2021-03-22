import React from 'react';
import ReactDOM from 'react-dom';
import UpdateTask from './update-task';


describe ( 'Update task component', () => {

  it ('render components without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UpdateTask />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
