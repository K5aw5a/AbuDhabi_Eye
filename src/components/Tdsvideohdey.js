
import React, { useState } from 'react';
import { Button, Modal, ModalBody, } from 'reactstrap';
import Tdslightboxh from './Tdslightboxh';

import './Tdsvideomodal.css';


class Tdsvideoferrari extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            modal:false
        }
    }

    toggle = () =>{
        this.setState({
            modal:!this.state.modal
        })
    }

    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}> <i className="icofont-play-alt-1"></i></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-video">

                    <ModalBody>
                        <button className="close" onClick={this.toggle}><i class="icofont-close-line"></i></button>

                        <Tdslightboxh></Tdslightboxh>
                    </ModalBody>

                </Modal>
            </div>
        );
    }        
}

export default Tdsvideoferrari;