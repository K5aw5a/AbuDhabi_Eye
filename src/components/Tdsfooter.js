import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import './Tdsfooter.css';


class Tdsfooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <footer>
                <Container>
                    <Row className="align-items-center">
                        <Col md="6">
                            <p>Copyright @ 2020 Abu Dhabi Eye. All rights reserved</p>
                        </Col>
                        <Col>
                            <ListGroup className="footer-menu">

                                <ListGroupItem tag="a" href="https://kic.ac.ae/"> Khawarizmi International College</ListGroupItem>

                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

            </footer>
        );

    }


}

export default Tdsfooter;
