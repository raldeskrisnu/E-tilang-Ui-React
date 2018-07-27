import React, { Component } from 'react';
import { alertActions } from '../action';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

class AlertUtil extends Component {

    constructor(props){
        super(props);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(){
        const { dispatch } = this.props;
        dispatch(alertActions.clear());
    }

    render(){
        const { alert } = this.props;
        return (
            <Alert color="info" isOpen={alert.visible} toggle={this.onDismiss}>
                {
                    alert.message
                }
            </Alert>
        )
    }
}

function mapStateToProps(state) {
    
    const test  = state.alerts;
    return {
        alert:test
    };
}

const connectedApp = connect(mapStateToProps)(AlertUtil);
export { connectedApp as AlertUtil }; 