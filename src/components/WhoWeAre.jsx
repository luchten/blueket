import React from 'react'
import GetStarted from './GetStarted'
import Link from 'next/link'

export default function WhoWeAre() {
    return (
        <div className='who_we_are_wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <h6 className='mini_title'>― WHO WE ARE</h6>
                        <h1 className='title'>Hire the Best Web and Mobile App Developers For Your Project</h1>
                        <p className='paragraph'>Expertise helps Blueket tackle the worlds most difficult challenges. Blueket provides digital products for worldwide brands on the web, mobile, and linked platforms. Expertise helps Blueket tackle the worlds most difficult challenges. Blueket provides digital products for worldwide brands on the web, mobile, and linked platforms.</p>
                        <p className='paragraph'>Expertise helps Blueket tackle the worlds most difficult challenges. Blueket provides digital products for worldwide brands on the web.</p>
                        <div className="buttons">
                            <GetStarted color='blue' />
                            <Link className='play paragraph' href='/'><i className="bi bi-play-fill"></i>Watch Video</Link>
                        </div>
                    </div>
                    <div className="col-5 py-4">
                        <div className='office-col'>
                            <div className="shape_1"></div>
                            <img className='img_1' src="/images/office-3.jpg" alt="" />
                            <img className='img_2' src="/images/office-4.jpg" alt="" />
                            <div className="shape_2"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
