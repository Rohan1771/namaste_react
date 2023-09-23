import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement(
  'div',
  { id: 'parent', xyz: 'abc' },
  [React.createElement('h1', {id: 'sibling1'}, 'I am h1 Sibling1'), 
  React.createElement('h2', {id: 'sibling'}, 'I am h2 Sibling2')]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);