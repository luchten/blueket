import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Workplace() {
    var settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        speed: 2000,
        className: 'workplace_slider'
    };
    return (
        <div className='workplace_wrapper'>
            <div className="blue_ball"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h1 className="title">Our Workplace Technologies</h1>
                        <h2>Our Workplace Technologies section of the Human Resources Departments website.</h2>
                        <p className="paragraph">Our Workplace Technologies Center is focused on working with business leaders to help them maximize their productivity, reduce costs and meet social needs in the 21st century. Our Workplace Technologies Center is focused on working with business leaders to help them maximize their productivity, reduce costs and meet social needs in the 21st century.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <Slider {...settings}>
                            <div>
                                <img src="/images/android.svg" alt="" />
                                <p className='paragraph'>Android</p>
                            </div>                            
                            <div>
                                <img src="/images/aws.svg" alt="" />
                                <p className='paragraph'>Aws</p>
                            </div>
                            <div>
                                <img src="/images/figma.svg" alt="" />
                                <p className='paragraph'>Figma</p>
                            </div>
                            <div>
                                <img src="/images/firebase.svg" alt="" />
                                <p className='paragraph'>Firebase</p>
                            </div>
                            <div>
                                <img src="/images/flutter.svg" alt="" />
                                <p className='paragraph'>Flutter</p>
                            </div>
                            <div>
                                <img src="/images/Google-cloud.svg" alt="" />
                                <p className='paragraph'>Google Cloud</p>
                            </div>
                            <div>
                                <img src="/images/java.svg" alt="" />
                                <p className='paragraph'>Java</p>
                            </div>
                            <div>
                                <img src="/images/Kotlin.svg" alt="" />
                                <p className='paragraph'>Kotlin</p>
                            </div>
                            <div>
                                <img src="/images/magento.svg" alt="" />
                                <p className='paragraph'>Magento</p>
                            </div>
                            <div>
                                <img src="/images/Node.js.svg" alt="" />
                                <p className='paragraph'>Node.js</p>
                            </div>
                            <div>
                                <img src="/images/python.svg" alt="" />
                                <p className='paragraph'>Python</p>
                            </div>
                            <div>
                                <img src="/images/react.svg" alt="" />
                                <p className='paragraph'>React</p>
                            </div>
                            <div>
                                <img src="/images/sketch.svg" alt="" />
                                <p className='paragraph'>Sketch</p>
                            </div>
                            <div>
                                <img src="/images/sqlite.svg" alt="" />
                                <p className='paragraph'>SQLite</p>
                            </div>
                            <div>
                                <img src="/images/swift.svg" alt="" />
                                <p className='paragraph'>Swift</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="orange_ball"></div>
        </div>
    )
}
