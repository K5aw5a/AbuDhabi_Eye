
import React, { useState } from 'react';
import { Button, Modal, ModalBody, } from 'reactstrap';

import './Tdsvideomodal.css';
class Tdsvideouni2 extends React.Component {
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
                <Button color="secondary" onClick={this.toggle} href="https://drive.google.com/file/d/1FYYV-IiZmB2tES1-C984w8VaTRnyvIDp/view?usp=sharing"> <i className="icofont-play-alt-1"></i></Button>
               
            </div>
        );
    }        
}

export default Tdsvideouni2;