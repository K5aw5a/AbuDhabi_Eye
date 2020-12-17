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
import Tdsfooter from './components/Tdsfooter';
import './App.css';
import './responsive.css';
import Tdsvideojbail from './components/Tdsvideojbail';
import Tdsvideowarner from './components/Tdsvideowarner';
import Tdsvideoclymb from './components/Tdsvideoclymb';
import Tdsvideolouver from './components/Tdsvideolouver';
import Tdsvideoferrari from './components/Tdsvideoferrari';
import Tdsvideoyas from './components/Tdsvideoyas';
import Tdsvideobateen from './components/Tdsvideobateen';
import Tdsvideopalace from './components/Tdsvideopalace';
import Tdsvideohdey from './components/Tdsvideohdey';
import Tdsvideowatan from './components/Tdsvideowatan';
import Tdsvideouni1 from './components/Tdsvideouni1';
import Tdsvideouni2 from './components/Tdsvideouni2';
import Tdsvideouni3 from './components/Tdsvideouni3';
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
                <Row className="align-items-center">
                <Col xs="12" md="12" lg="8" className="text-right"><h4 className="text-white"> احصل على العدد الأول من المجلة الآن</h4></Col>
                <Col xs="12" md="12" lg="4">
                    <Tdsinputgroup />
    
                </Col>
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
                    <iframe width="540" height="342" src="https://www.youtube.com/embed/jcnBwYEIHZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="6">
                    <Tdsaboutslider />
    
                </Col>
                </Row>
            </Container>
           </div>
            {/* places Section Start */}
            
            <div className="section expert-team grapping" id="team">
            <Container>
                <div className="title-box">
                <h2> أشهر الأماكن السياحية في أبوظبي</h2>
                </div>
                
                    <Row>
                    <Col xs="12" sm="6" md="6" lg="3">
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/jbail204.JPG")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white">جزيرة الجبيل</h4>
                        <p className="text-white">حديقة القرم بالجبيل أول وجهة تعليمية وطبيعة وترفيهية قائمة بذاتها من نوعها في إمارة أبوظبي</p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" > <Tdsvideojbail></Tdsvideojbail> </ListGroupItem>
                        </ListGroup>
                        </div>
        
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3">
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/warner204.jpg")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white">عالم وارنر براذرز</h4>
                        <p className="text-white">مدينة ملاهي داخلية في أبو ظبي ،تحتوي الحديقة على 29 لعبة ومطاعم ومعالم سياحية ومتاجر وعروض</p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" > <Tdsvideowarner></Tdsvideowarner> </ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3">
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/clymb204.jpg")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white">كلايم أبوظبي</h4>
                        <p className="text-white">وجهة رياضية وترفيهية في جزيرة ياس ومركز المغامرات الذي سيحدث ثورة في القفز المظلي الداخلي والتسلق </p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" > <Tdsvideoclymb></Tdsvideoclymb> </ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3">
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/louver1.png")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white">متحف اللوفر أبوظبي</h4>
                        <p className="text-white">متحف الحضارة والفنون يقع في المنطقة الثقافية في السعديات ،ويعرض الأعمال الفنية من جميع بقاع العالم</p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" > <Tdsvideolouver></Tdsvideolouver></ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3" style={{"marginTop":"30px"}}>
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/ferrari204.jpg")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white"> عالم فيراري </h4>
                        <p className="text-white">أول مدينة ترفيهية تحمل علامة فيراري ولها الرقم القياسي لأكبر هيكل فضاء تم بناؤه على الإطلاق</p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" >  <Tdsvideoferrari></Tdsvideoferrari></ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3" style={{"marginTop":"30px"}}>
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/yas204.jpg")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white">ياس ووتر وورلد</h4>
                        <p className="text-white">حديقة مائية على الطراز الإماراتي تقع في جزيرة ياس في أبو ظبي وهي موطن لأكثر من 40 لعبة ومنزلقة  </p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" >  <Tdsvideoyas></Tdsvideoyas></ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3" style={{"marginTop":"30px"}}>
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/heday204.JPG")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white">جزيرة الحديريات</h4>
                        <p className="text-white"> تعد الجزيرة جزءًا من تطوير المدينة الجديد الذي سيشمل مناطق جذب تجارية ومساكن للإماراتيين</p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" >  <Tdsvideohdey></Tdsvideohdey></ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3" style={{"marginTop":"30px"}}>
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/watan204.JPG")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white"> قصر الوطن </h4>
                        <p className="text-white">يعبر قصر الوطن عن الأصالة وعبق التراث لدولة الإمارات، ويدعوا للتعرف على ثقافة دولة الإمارات وتراثها عبر التاريخ</p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" >  <Tdsvideowatan></Tdsvideowatan></ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3" style={{"marginTop":"30px"}}>
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/palace204204.png")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white">قصر الإمارات</h4>
                        <p className="text-white">هو فندق فاخر من فئة الخمس نجوم في أبو ظبي و يتكون قصر الإمارات من 394 وحدة سكنية </p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" >  <Tdsvideopalace></Tdsvideopalace></ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="3" style={{"marginTop":"30px"}}>
                        <div className="text-center coman-box team-box">
                        <div className="team-img">
                            <img src={require("./images/bateen204.JPG")} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h4 className="text-white"> مرسى البطين </h4>
                        <p className="text-white">يقع في واحدة من أقدم المناطق على الجانب الغربي من جزيرة أبوظبي ، مقابل قناة المصفح</p>
                        <ListGroup className="social-icon-team">
                            <ListGroupItem tag="a" >  <Tdsvideobateen></Tdsvideobateen></ListGroupItem>        
                        </ListGroup>
                        </div>
                    </Col>
                    </Row>   
                    <div className="title-box">
            
                </div>
                
            </Container>
            </div>
                       
            {/*Our Latest News  Section Start*/}
            <div className="section marketing-section grapping" id="blog">
            <Container>
                <div className="title-box">
                <h2 className="text-white">آخر الأخبار</h2>
                </div>
                <Row>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/prof.jpg")} alt="Card image cap" />
                    <Card body>
                        <CardTitle className="text-right">مقابلة مع البروفيسور نبيل القاضي </CardTitle>
                        <CardText className="text-right">حوار مع نائب رئيس شؤون الأكاديمية لكلية الخوارزمي </CardText>
                        <Button color="primary"><Tdsvideouni1></Tdsvideouni1></Button>
                    </Card>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/uni.jpg")} alt="Card image cap" />
                    <Card body>
                        <CardTitle className="text-right">جولة في كلية الخوارزمي </CardTitle>
                        <CardText className="text-right">الإجراءات الاحترازية في ظل الظروف الحالية (جائحة كورونا ) </CardText>
                        <Button color="primary"><Tdsvideouni2></Tdsvideouni2></Button>
                    </Card>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/maga.png")} alt="Card image cap" />
                    <Card body>
                        <CardTitle className="text-right">مجلة عين أبوظبي</CardTitle>
                        <CardText className="text-right">إصدار العدد الأول من مجلة عين أبوظبي حيث تجدون كل ماهو جديد عن السياحة  </CardText>
                        <Button color="primary" ><Tdsvideouni3></Tdsvideouni3></Button>
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
                <p >مشروع التخرج 2020 
                    <br/>
                <a style={{"color":"#8d211b"}} href=" https://www.instagram.com/abudhabi__eye/?igshid=1lyndaj6y7od7"><Icofont icon="icofont-instagram" /> تابعونا  </a> 
                </p>
                
                </div>
                <Row>
                <Col xs="12" md="12" lg="4" style={{"text-align":"center"}}>
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
                <Col xs="12" md="12" lg="4" style={{"text-align":"center"}}>
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
                <Col xs="12" md="12" lg="4" style={{"text-align":"center"}}>
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
  