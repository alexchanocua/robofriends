import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    // if anything errors this will catch it.
    componnetDidCatch(error, info){
        this.setState({hasError: true});
    }
    // if there is no error return whatever ErrorBoundry is wrapping
    render(){
        if(this.state.hasError){
            return <h1>Oooops. That is not good.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
