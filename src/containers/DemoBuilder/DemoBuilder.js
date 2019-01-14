import React, {Component, Fragment} from 'react';

import Modal from "../../components/UI/Modal/Modal";
import MovieContent from "../../components/MovieComponent/Movie";
import Alert from "../../components/UI/Alert/Alert";
import Button from "../../components/UI/Button/Button";

class DemoBuilder extends Component {

    state = {
        // type: [danger, primary, success, warning],
        modalShow: false,
        showAlert: false,
        type: ''
    };

    show = () => {
        this.setState({modalShow: true});
    };

    closed = () => {
        this.setState({modalShow: false});
    };

    showAlert = (type) => {
        this.setState({showAlert: true, type: type});
    };

    closeAlert = () => {
        this.setState({showAlert: false});
    };


    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.modalShow}
                    closed={this.closed}
                    title='Ralph Breaks the Internet'
                >
                    <p><strong>Ralph Breaks the Internet</strong> is a 2018 American 3D computer-animated comedy film
                        produced by Walt Disney Animation Studios and distributed by Walt Disney Pictures.
                        It is the sequel to the 2012 film Wreck-It Ralph about an arcade game villain who wants a role
                        reversal, making it Disney's 57th feature-length animated film.
                        The film was directed by Rich Moore and Phil Johnston (who wrote the screenplay with Pamela
                        Ribon), and executive-produced by John Lasseter, Chris Williams,
                        and Jennifer Lee.[a] It features voicework by John C. Reilly, Sarah Silverman, Jack McBrayer,
                        Jane Lynch, and Ed O'Neill (reprising their roles from the first film), with Alan Tudyk
                        returning to voice a new character,
                        and new additions to the cast that include Gal Gadot, Taraji P. Henson and Alfred Molina.</p>
                </Modal>
                <div className="MovieWrap">
                    <MovieContent name="Ralph Breaks the Internet" released={2018}
                                  img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/43000/43031/PosterDynamic/66364.jpg"
                                  modalShow={() => this.show()}
                    />

                </div>
                <span className="AlertTitle">Alert Component</span>
                <div className="BtnWrap">
                    <Button click={(type) => this.showAlert(type)} type="Danger">Danger</Button>
                    <Button click={(type) => this.showAlert(type)} type="Primary">Primary</Button>
                    <Button click={(type) => this.showAlert(type)} type="Success">Success</Button>
                    <Button click={(type) => this.showAlert(type)} type="Warning">Warning</Button>
                </div>
                <div className="AlertWrap">
                    <Alert
                        showAlert={this.state.showAlert}
                        closeAlert={this.closeAlert}
                        type={this.state.type}
                    >
                        This is a {this.state.type} type alert
                    </Alert>
                </div>
            </Fragment>
        )
    }
}

export default DemoBuilder;