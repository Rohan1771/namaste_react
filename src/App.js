import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement(
  'div',
  { id: 'parent', xyz: 'abc' },
  [React.createElement('h1', {id: 'sibling1'}, 'I am h1 Sibling1'), 
  React.createElement('h2', {id: 'sibling'}, 'I am h2 Sibling2')]
)





//JSX - Not HTML in JS, but HTML/XML-like syntax
// This code is transpiled before it reaches jS engine. => by parcel through a package called Babel.
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTML Element(render)
const jsxHeading = <h1 className="heading">Hello World from JSX</h1>








// React Functional Component
const HeadingComponent = () => {
  return <h1 className="heading">Hello World from Functional Component</h1>
}

// React Functional Component
const SubHeading = () => <h3 className="subheading">This is a Subheading Functional component</h3>

// React Element
const title = <p className='title'>This is a Title React Element</p>

// Component Composition => composing components into a component.
const Container = () => {
  return (
    <div className="container">
      <HeadingComponent />
      <SubHeading />
      {title}
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);    //Render React Element
// root.render(jsxHeading); //Render JSX Element
root.render(<Container />);  // Render React Functional Component