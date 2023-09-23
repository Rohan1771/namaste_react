const heading = React.createElement(
  'h1',
  { id: 'head', xyz: 'abc' },
  'This is React without React App'
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);