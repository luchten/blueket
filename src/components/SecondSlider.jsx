import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SecondSlider() {
    var settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 750,
        swipeToSlide: true,
        speed: 1500,
        className: 'second_slider'
    };
    return (
        <div className="container">
            <Slider {...settings}>
                <div className='second_slider_item'>
                    <img src="/images/appstore.svg" alt="" />
                </div>
                <div className='second_slider_item'>
                    <img src="/images/aspire.svg" alt="" />
                </div>
                <div className='second_slider_item'>
                    <img src="/images/fino.svg" alt="" />
                </div>
                <div className='second_slider_item'>
                    <img src="/images/indowind.svg" alt="" />
                </div>
                <div className='second_slider_item'>
                    <img src="/images/lyka.svg" alt="" />
                </div>
                <div className='second_slider_item'>
                    <img src="/images/manu.svg" alt="" />
                </div>
                <div className='second_slider_item'>
                    <img src="/images/nuvoco.svg" alt="" />
                </div>
                <div className='second_slider_item'>
                    <img src="/images/riko.svg" alt="" />
                </div>
            </Slider>
        </div>
    )
}
