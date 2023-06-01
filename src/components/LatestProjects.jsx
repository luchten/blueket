import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LatestProjects() {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,    
    className: 'projects_slider'
  };
  return (
    <div className='latest_projects'>
      <div className='container mb-5'>
        <div className="row">
          <div className="col-6">
            <h1 className='title'>Latest Projects</h1>
            <Link className='paragraph' href='/'>View all Projects <i className="bi bi-box-arrow-in-up-right"></i></Link>
          </div>
          <div className="col-6">
            <p className='paragraph'>Blueket overcomes challenges, achieves results, and adds value to our clients and partners. Take a look at some of our clients success stories. Take a look at some of our clients success stories.</p>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div className="project_card">
          <img src="/images/work-1.jpg" alt="" />
          <h2 className='card_title'>Kyntra: Online Shopping</h2>
          <p className='paragraph'>Flutter Development</p>
        </div>
        <div className="project_card">
          <img src="/images/work-2.jpg" alt="" />
          <h2 className='card_title'>Bradleys Bakery</h2>
          <p className='paragraph'>Web Design</p>
        </div>
        <div className="project_card">
          <img src="/images/work-3.jpg" alt="" />
          <h2 className='card_title'>Tango Fashion Store</h2>
          <p className='paragraph'>App Development</p>
        </div>
        <div className="project_card">
          <img src="/images/work-4.jpg" alt="" />
          <h2 className='card_title'>Ruppay Investment</h2>
          <p className='paragraph'>iOs Development</p>
        </div>
        <div className="project_card">
          <img src="/images/work-5.jpg" alt="" />
          <h2 className='card_title'>Kiya NFT Market</h2>
          <p className='paragraph'>Web Development</p>
        </div>
      </Slider>
    </div>
  )
}
