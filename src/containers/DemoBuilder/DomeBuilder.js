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
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancel={this.purchaseCancel}
                        purchaseContinue={this.purchaseContinue}
                    />
                </Modal>
            </Fragment>
        )
    }
}

export default DemoBuilder;