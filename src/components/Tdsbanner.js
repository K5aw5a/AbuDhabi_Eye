import React from 'react';
import { Container, Button } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './Tdsbanner.css';
class Tdsbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: {
                0: {
                    nav: false,
                    dots: true,
                },
                767: {
                    nav: true
                },

            },
        }

    }

    render() {
        return (

            <section className="banner">

                <OwlCarousel
                    className="banner-owl owl-theme"
                    loop={true}
                    margin={0}
                    autoplay={true}
                    autoplayTimeout={8000}
                    smartSpeed={500}
                    nav={true}
                    items="1"
                    responsive={this.state.responsive}
                    dots={false} >
                    <div className="item">
                        <div className="banner-one banner-img">
                            
                        </div>
                    </div>
                    
                </OwlCarousel>
            </section>
        );
    }
}


export default Tdsbanner;
