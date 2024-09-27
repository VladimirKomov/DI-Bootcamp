import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log('Error: ', error);
    }

    render() {
        if (this.state.hasError) {
            return <div><h2>Something went wrong.</h2></div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;