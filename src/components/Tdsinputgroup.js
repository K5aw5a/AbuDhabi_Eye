import React from 'react';
import Icofont from 'react-icofont';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import './Tdsinputgroup.css';

class Tdsinputgroup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <InputGroup className="news-box">
                
                    <Button color={"secondary"}> <i class="icofont-download"></i></Button>
                
            </InputGroup>

        );
    }
}


export default Tdsinputgroup;
