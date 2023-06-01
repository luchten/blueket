import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HappyClients() {
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        speed: 2000,
        className: 'happy_slider'
    };
    return (
        <div className='container happy_clients'>
            <div className="row">
                <div className="col text-center">
                    <h6 className="mini_title">Review/Feedback</h6>
                    <h1 className="title">Happy Clients With Digital Transformation</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Slider {...settings}>
                        <div className="happy_card">
                            <div className="card_header">
                                <img src="/images/user-image-2.jpg" alt="" />
                                <div className="card_info">
                                    <h3 className="card_title">Mike Smith</h3>
                                    <p className="paragraph">Business Man</p>
                                </div>
                            </div>
                            <p className="paragraph">When it comes to website development and SEO, Blueket has been the best company Ive worked with so far. We hired them for both of our businesses and have seen a drastic increase in our customer base.</p>
                            <div className="card_rating">
                                <img src="/images/google.png" alt="" />
                                <div>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="happy_card">
                            <div className="card_header">
                                <img src="/images/user-image-3.jpg" alt="" />
                                <div className="card_info">
                                    <h3 className="card_title">Riya Smily</h3>
                                    <p className="paragraph">CEO @ Tema Security</p>
                                </div>
                            </div>
                            <p className="paragraph">When it comes to website development and SEO, Blueket has been the best company Ive worked with so far. We hired them for both of our businesses and have seen a drastic increase in our customer base.</p>
                            <div className="card_rating">
                                <img src="/images/google.png" alt="" />
                                <div>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="happy_card">
                            <div className="card_header">
                                <img src="/images/user-image-4.jpg" alt="" />
                                <div className="card_info">
                                    <h3 className="card_title">Oliver Kanjorva</h3>
                                    <p className="paragraph">Business Man</p>
                                </div>
                            </div>
                            <p className="paragraph">When it comes to website development and SEO, Blueket has been the best company Ive worked with so far. We hired them for both of our businesses and have seen a drastic increase in our customer base.</p>
                            <div className="card_rating">
                                <img src="/images/google.png" alt="" />
                                <div>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="happy_card">
                            <div className="card_header">
                                <img src="/images/user-image.jpg" alt="" />
                                <div className="card_info">
                                    <h3 className="card_title">Karan Kumar</h3>
                                    <p className="paragraph">CTO @ Amber Fund</p>
                                </div>
                            </div>
                            <p className="paragraph">When it comes to website development and SEO, Blueket has been the best company Ive worked with so far. We hired them for both of our businesses and have seen a drastic increase in our customer base.</p>
                            <div className="card_rating">
                                <img src="/images/google.png" alt="" />
                                <div>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
