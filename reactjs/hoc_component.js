import React, { Component } from 'react';

// Higher Order Component
const withUpperCaseProps = (WrappedComponent) => {
  return class extends Component {
    // Add additional logic here
    modifyProps = (props) => {
      // Convert string props to uppercase
      const modifiedProps = Object.entries(props).reduce((acc, [key, value]) => {
        acc[key] = typeof value === 'string' ? value.toUpperCase() : value;
        return acc;
      }, {});

      return modifiedProps;
    };

    render() {
      // Apply the modified props to the WrappedComponent
      const modifiedProps = this.modifyProps(this.props);

      return <WrappedComponent {...modifiedProps} />;
    }
  };
};

// Component that will be wrapped by the HOC
const MyComponent = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

// Apply the HOC to MyComponent
const MyComponentWithUpperCaseProps = withUpperCaseProps(MyComponent);

// Usage of the wrapped component
const App = () => {
  const data = {
    name: 'John Doe',
    age: 25,
  };

  return (
    <div>
      <h1>Original Component:</h1>
      <MyComponent {...data} />

      <h1>Component with UpperCase Props:</h1>
      <MyComponentWithUpperCaseProps {...data} />
    </div>
  );
};

export default App;
