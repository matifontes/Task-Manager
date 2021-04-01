import React from 'react';
import ReactDOM from 'react-dom';
import TaskManager from './task-manager';


test('render project without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskManager />, div);
  ReactDOM.unmountComponentAtNode(div);
});
