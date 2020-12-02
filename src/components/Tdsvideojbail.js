
import React, { useState } from 'react';
import { Button, Modal, ModalBody, } from 'reactstrap';

import './Tdsvideomodal.css';
class Tdsvideojbail extends React.Component {
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

                        <iframe width="100%" height="520" src="https://drive.google.com/file/d/1ZKlHYD93ZyoTIhOm5Zju57qaUVRWy2BE/view?usp=sharing" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ModalBody>

                </Modal>
            </div>
        );
    }        
}

export default Tdsvideojbail;