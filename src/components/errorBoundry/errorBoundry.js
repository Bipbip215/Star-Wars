import React from 'react';

import './errorBoundry.css';

import ErrorMessage from '../errorMessage/errorMessage';

export default class ErrorBoundry extends React.Component {

    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({
            hasError:true,
        });
    };

    render() {
        if(this.state.hasError) {
            return <ErrorMessage />
        }
        return this.props.children;
    };
};