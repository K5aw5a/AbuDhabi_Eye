
import React, { useState } from 'react';
import { Button, Modal, ModalBody, } from 'reactstrap';

import './Tdsvideomodal.css';
class Tdsvideoclymb extends React.Component {
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

                        <iframe width="100%" height="520" src="https://drive.google.com/file/d/1ZNUCCVTkarbe-i0N-9QfpChA0IZvHaNs/view?usp=sharing" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ModalBody>

                </Modal>
            </div>
        );
    }        
}

export default Tdsvideoclymb;