import React from 'react';
// import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

// 'smoke test' to see if <App/> renders without faults
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
})