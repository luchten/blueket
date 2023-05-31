import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetStarted from './GetStarted';

export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        className: 'main_slider'
    };
    return (
        <Slider {...settings}>
            <div>
                <img src="/images/slider-1.jpg" alt="slide 1" />
                <div className="container">
                    <div className="col-7 main_slide">
                        <h6 className='mini_title'>― Creative Agency</h6>
                        <h1>We Are a Bunch of Future Holders, Making the Digital World Better</h1>
                        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos perspiciatis odio eos quo corrupti veritatis expedita fugit officiis id quia, ipsam recusandae tempore voluptatibus, quasi vel distinctio at consequatur?</p>
                        <GetStarted color='blue' />
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/slider-2.jpg" alt="slide 2" />
                <div className="container">
                    <div className="col-7 main_slide">
                        <h6 className='mini_title'>― Creative Agency</h6>
                        <h1>We Build Global Experiences That Customers Love</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos perspiciatis odio eos quo corrupti veritatis expedita fugit officiis id quia, ipsam recusandae tempore voluptatibus, quasi vel distinctio at consequatur?</p>
                        <GetStarted color='blue' />
                    </div>
                </div>
            </div>
        </Slider>
    )
}
