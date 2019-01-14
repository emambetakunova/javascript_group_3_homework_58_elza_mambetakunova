import React, {Fragment} from 'react';
import './Alert.css'
import Backdrop from "../Backdrop/Backdrop";


const Alert = props => {
    const type = props.type;
    const displayShow = props.showAlert ? 'block' : 'none';
    const displayClose = props.closeAlert ? 'block' : 'none';
    return (
        <Fragment>
            <Backdrop
                show={props.showAlert}
                onClick={props.closeAlert}
            />
            <div className={['Dismissible', 'Alert', type].join(' ')}
                 style={{display: displayShow}}>
                <button
                    className="Close"
                    onClick={props.closeAlert}
                    style={{display: displayClose}}>X
                </button>
                {props.children}
            </div>
        </Fragment>
    );
};

export default Alert;