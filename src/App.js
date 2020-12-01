/**
 * Entry application component used to compose providers and render Routes.
 * */
import React from 'react';
import {
  Button, Container, Row, Col, Media, Card, CardImg, CardText, Form, FormGroup, Input,
  CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';
// Web Icon fonts
import Icofont from 'react-icofont';
// Web theme color root css
import './components/colors.css';
import Tdsheader from './components/Tdsheader';
import Tdsbanner from './components/Tdsbanner';
import Tdsinputgroup from './components/Tdsinputgroup';
import Tdsaboutslider from './components/Tdsaboutslider';
import Tdsfeedbackslider from './components/Tdsfeedbackslider';
import Tdslightbox from './components/Tdslightbox';
import Tdspricingtable from './components/Tdspricingtable';
import Tdsfooter from './components/Tdsfooter';
import './App.css';
import './responsive.css';
class App extends React.Component{

    render() {
        return (
        <div className="App" >
            {/* Navbar  */}
            <Tdsheader   />
            
            {/* Hero Section Start */}
            <div id="home" className="section">
            <Tdsbanner />
            </div>
            {/* Subscribe Section Start*/}
            <div className=" subscribe-box grapping">
            <Container>
                <Row className="align-items-right">
                <Col xs="12" md="12" lg="4" >
                    <Tdsinputgroup />
                </Col>
                <Col xs="12" md="12" lg="8" className="text-right"><h4 className="text-white"> احصل على العدد الأول من المجلة الآن</h4></Col>
                
                </Row>
            </Container>
            </div>
            {/* Welcome Section Start */}
            <div className=" welcome-box grapping" style={{'max-height':'300px'}}>
            <Container>
                <div className="title-box" >
                <h2>مرحبا بكم في <b>عين أبوظبي</b></h2>
                <p>نقدم لكم كل ماهو متعلق بالأماكن السياحية في إمارة أبوظبي</p>
                <p>لنكون لكم العين التي ترون من خلالها جمال أبوظبي</p>
                </div>
            </Container>
            </div>
              {/* line seperator*/}
              <div className="workwithus">
            </div>
            {/* About us Section Start */}
            <div className="section about-box grapping" id="about">
            <Container>
                <Row>
                <Col xs="12" sm="12" md="12" lg="6">
                    <div className="about-img">
    
                    <img src={require("./images/aboutus.jpg")} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="6">
                    <Tdsaboutslider />
    
                </Col>
                </Row>
            </Container>
            </div>
            {/* Our Services Section Start */}
            <div className="section ourservice grapping" id="services">
            <Container>
                <div className="title-box">
                <h2>Our  <b>Services</b></h2>
                <p>There are many variations of passages of available.</p>
                </div>
                <Row>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-crown" />
                    <h4>Branding</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-pen-alt-3" />
                    <h4>UX/UI Design</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-camera-alt" />
                    <h4>Photography</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-chart-growth" />
                    <h4>Marketing</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-laptop-alt" />
                    <h4>Web Design</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-tick-boxed" />
                    <h4>Development</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="15" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="paper" />
                    <h4>Content Writer</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="search-job" />
                    <h4>SEO & SMM</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                </Row>
            </Container>
            </div>
            {/* Team Section Start */}
            <div className="section expert-team grapping" id="team">
            <Container>
                <div className="title-box">
                <h2>Expert <b>Team</b></h2>
                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <Row>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/team-img1.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">Lucy Smith</h4>
                    <p className="text-white">When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
    
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/team-img2.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">Alex Maxwel</h4>
                    <p className="text-white">When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/team-img3.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">Steven Doe</h4>
                    <p className="text-white">When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/team-img4.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white"> Maxwel Doe </h4>
                    <p className="text-white">When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
                </Col>
                </Row>
            </Container>
            </div>
            {/* Portfolio Section Start*/}
            <div className="section ourportfolio grapping" id="portfolio">
            <Container>
                <div className="title-box">
                <h2>Our   <b>Portfolio</b></h2>
                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <Tdslightbox></Tdslightbox>
            </Container>
            </div>
            {/* Marketing Section Start*/}
            <div className="marketing-section grapping" >
            <Container>
    
                <Row className="align-items-center">
                <Col xs="12" sm="12" md="12" lg="6">
                    <div className="marketing-img">
                    <img src={require("./images/digitalmarketing.jpg")} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="6">
                    <Media className="markrt-box">
                    <Media left href="#">
                        <Icofont icon="icofont-web" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Fully Responsive
                        </Media>
                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore aliquam quaerat voluptatem.
                    </Media>
                    </Media>
                    <Media className="markrt-box">
                    <Media left href="#">
                        <Icofont icon="icofont-chart-pie" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Digital Marketing
                        </Media>
                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore aliquam quaerat voluptatem.
                    </Media>
                    </Media>
                    <Media className="markrt-box">
                    <Media left href="#" >
                        <Icofont icon="icofont-brand-designfloat" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Clean & Unique Design
                        </Media>
                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore aliquam quaerat voluptatem.
                    </Media>
                    </Media>
    
                </Col>
                </Row>
            </Container>
            </div>
            {/* Expert Feadback Section Start */}
            <div className="expertfeesback grapping" >
            <Container>
                <div className="title-box">
                <h2>Expert <b>Feadback</b></h2>
                <p>Extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain</p>
                </div>
                <Tdsfeedbackslider></Tdsfeedbackslider>
            </Container>
            </div>
            
            {/*Our Latest News  Section Start*/}
            <div className="section latestnews grapping" id="blog">
            <Container>
                <div className="title-box">
                <h2>Our Latest  <b>News</b></h2>
                <p>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <Row>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/blog-new1.jpg")} alt="Card image cap" />
                    <Card body>
                        <CardTitle>Dignissimos ducimus qui </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Read More</Button>
                    </Card>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/blog-new2.jpg")} alt="Card image cap" />
                    <Card body>
                        <CardTitle>Dignissimos ducimus qui </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Read More</Button>
                    </Card>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/blog-new3.jpg")} alt="Card image cap" />
                    <Card body>
                        <CardTitle>Dignissimos ducimus qui</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Read More</Button>
                    </Card>
                    </Card>
                </Col>
                </Row>
            </Container>
            </div>
            {/* line seperator*/}
            <div className="workwithus">
            </div>
            {/* Contact Us Section Start  */}
            <div className="section contactus grapping" id="contact" >
            <Container >
                <div className="title-box">
                <h2>   <b>للتواصل معنا</b></h2>
                <p>مشروع التخرج 2020</p>
                </div>
                <Row>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left  >
                        <Icofont icon="icofont-user-male" />
                    </Media>
                    <Media body>
                        <Media heading>
                        الإشراف
                        </Media>
                       <p>د. ابن عوف حسن</p>
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left  >
                        <Icofont icon="icofont-user-female" />
                    </Media>
                    <Media body>
                        <Media heading>
                        K-916660838
                        </Media>
                       <p>أميمة الطالب بوحمادي </p>
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left  >
                        <Icofont icon="icofont-user-female" />
                    </Media>
                    <Media body>
                        <Media heading>
                        K-91320243
                        </Media>
                       <p> نور غسان </p>
                    </Media>
                    </Media>
                </Col>
                </Row>
            </Container>
            </div>
            {/* Footer  Section Start */}
            <div className=""> 
                <Tdsfooter></Tdsfooter>
            </div>
        </div>
        );
    }
  }
  
  export default App;
  