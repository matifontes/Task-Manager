import React from 'react';
import ReactDOM from 'react-dom';
import RegisterTask from './register-task';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe ( 'Register task component', () => {

  it ('render components without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegisterTask />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  if('Must register a new task', () =>{
    const { getByTestId } = render(<RegisterTask />);
    fireEvent.change(getByTestId('txt-task'), { target: {value: 'Test component' }});
    fireEvent.click(getByTestId('btn-register'));
    expect(getByTestId('modal')).toHaveTextContent('Success');
    expect(getByTestId('modal')).toHaveTextContent('Task add with success');
  });
});
