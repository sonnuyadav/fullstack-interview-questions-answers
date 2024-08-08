import React from 'react';

// Higher-Order Component
const withLogging = (WrappedComponent) => {
    return (props) => {
        console.log('Props:', props);
        return <WrappedComponent {...props} />;
    };
};

// A simple functional component
const MyComponent = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
        </div>
    );
};

// Wrapping the component with the HOC
const MyComponentWithLogging = withLogging(MyComponent);

// App Component to use the wrapped component
const App = () => {
    return (
        <div>
            <MyComponentWithLogging name="John" />
        </div>
    );
};

export default App;
