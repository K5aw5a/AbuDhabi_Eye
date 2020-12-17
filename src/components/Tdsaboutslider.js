
import React from 'react';
import {

    Row, Col, Progress
} from 'reactstrap';
import Icofont from 'react-icofont';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Tdsaboutslider.css';

class Tdsaboutslider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={false}
                items="1"
                dots={true}
                lazyLoad={true}

            >




                <div className="item">
                    <div className="title-box text-left mb-0">
                        <h2 className="mb-0">وسائل التواصل الاجتماعي والسياحة</h2>
                    </div>
                    <p>  فيديو كارتون قصير يشرح كيف أصبح من السهل الآن اختيار المكان الذي نريد الذهاب إليه والقيام بجولتنا فيه مع وسائل التواصل الاجتماعي </p>
                  

                </div>

               
               

            </OwlCarousel>

        );

    }



}

export default Tdsaboutslider;