import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='footer_wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-6 career_col">
                        <img src="/images/logo-black.svg" alt="" />
                        <p className="paragraph">Career</p>
                        <Link href='/' className='hiring'>
                            <img src="/images/career.png" alt="" />
                            We are Hiring!
                        </Link>
                        <p className="paragraph">Follow Us</p>
                        <div className='follow_us'>
                            <Link href='/'><i className="bi bi-twitter"></i></Link>
                            <Link href='/'><i className="bi bi-facebook"></i></Link>
                            <Link href='/'><i className="bi bi-youtube"></i></Link>
                            <Link href='/'><i className="bi bi-linkedin"></i></Link>
                            <Link href='/'><i className="bi bi-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="col-6 contact_col">
                        <div className="row">
                            <div className="col-6">
                                <div className='contact_title'>
                                    <img src="/images/in.svg" alt="" />
                                    <p className="paragraph">India</p>
                                </div>
                                <p className="paragraph first">Tom Extension, 1st Block 2nd Cross, Yello circle, Jaipur, Rajasthan 123456</p>
                                <Link href='/'><p className='paragraph second'><i className="bi bi-telephone-fill"></i>91 123 4567 890</p></Link>
                                <Link href='/'><p className="paragraph"><i className="bi bi-envelope-fill"></i>info@yourwebsite.com</p></Link>
                            </div>
                            <div className="col-6">
                                <div className='contact_title'>
                                    <img src="/images/us.svg" alt="" />
                                    <p className="paragraph">USA</p>
                                </div>
                                <p className="paragraph first">Tom Extension, 1st Block 2nd Cross, Yello round circle, New York, Usa 95356</p>
                                <Link href='/'><p className='paragraph second'><i className="bi bi-telephone-fill"></i>91 123 4567 890</p></Link>
                                <Link href='/'><p className="paragraph"><i className="bi bi-envelope-fill"></i>info@yourwebsite.com</p></Link>
                            </div>
                        </div>
                        <div className="row badges ">
                            <div className="col text-center">
                                <img src="/images/award-badge-1.png" alt="" />
                                <img src="/images/award-badge-2.png" alt="" />
                                <img src="/images/award-badge-3.png" alt="" />
                                <img src="/images/award-badge-5.png" alt="" />
                                <img src="/images/award-badge-6.png" alt="" />
                                <img src="/images/award-badge-7.png" alt="" />                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row links_row">
                    <div className="col-3">
                        <Link href='/'><p className='p_title'>Company Links</p></Link>
                        <Link href='/'><p className='paragraph'>About Us</p></Link>
                        <Link href='/'><p className='paragraph'>Contact Us</p></Link>
                        <Link href='/'><p className='paragraph'>Careers</p></Link>
                        <Link href='/'><p className='paragraph'>Our Team</p></Link>
                        <Link href='/'><p className='paragraph'>Media Coverage</p></Link>
                        <Link href='/'><p className='paragraph'>Referral Program</p></Link>
                        <Link href='/'><p className='paragraph'>Case Studies</p></Link>
                        <Link href='/'><p className='paragraph'>Client Testimonials</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
