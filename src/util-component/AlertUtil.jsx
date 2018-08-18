import React, { Component } from 'react';
import { alertActions } from '../action';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import history from '../helpers/history';

class AlertUtil extends Component {

    constructor(props){
        super(props);

        const { dispatch } = this.props;

        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(){
        const { dispatch } = this.props;
        dispatch(alertActions.close());
    }

    render(){
        const { alert } = this.props;
        return (
            <Alert color={alert.type} isOpen={alert.visible} toggle={this.onDismiss}>
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