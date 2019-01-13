import React, {Component, Fragment} from 'react';

import Modal from "../../components/UI/Modal/Modal";

class DemoBuilder extends Component {
    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.purchasing}
                    close={this.purchaseCancel}
                >
                </Modal>
            </Fragment>
        )
    }
}

export default DemoBuilder;