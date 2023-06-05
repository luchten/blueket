import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='footer_wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-6 career_col">
                        <Link href='/'><img src="/images/logo-black.svg" alt="" /></Link>
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
                                <Link href='/'><img src="/images/award-badge-1.png" alt="" /></Link>
                                <Link href='/'><img src="/images/award-badge-2.png" alt="" /></Link>
                                <Link href='/'><img src="/images/award-badge-3.png" alt="" /></Link>
                                <Link href='/'><img src="/images/award-badge-5.png" alt="" /></Link>
                                <Link href='/'><img src="/images/award-badge-6.png" alt="" /></Link>
                                <Link href='/'><img src="/images/award-badge-7.png" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row links_row">
                    <div className="col-3">
                        <ul className="footer_links">
                            <li className='p_title'>Company Links</li>
                            <li><Link className='paragraph' href='/'>About Us</Link></li>
                            <li><Link className='paragraph' href='/'>Contact Us</Link></li>
                            <li><Link className='paragraph' href='/'>Careers</Link></li>
                            <li><Link className='paragraph' href='/'>Our Team</Link></li>
                            <li><Link className='paragraph' href='/'>Media Coverage</Link></li>
                            <li><Link className='paragraph' href='/'>Referral Program</Link></li>
                            <li><Link className='paragraph' href='/'>Case Studies</Link></li>
                            <li><Link className='paragraph' href='/'>Client Testimonials</Link></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="footer_links">
                            <li className='p_title'>Technologies</li>
                            <li><Link className='paragraph' href='/'>React JS</Link></li>
                            <li><Link className='paragraph' href='/'>Laravel</Link></li>
                            <li><Link className='paragraph' href='/'>CodeIgniter</Link></li>
                            <li><Link className='paragraph' href='/'>Node JS</Link></li>
                            <li><Link className='paragraph' href='/'>WordPress</Link></li>
                            <li><Link className='paragraph' href='/'>Magento</Link></li>
                            <li><Link className='paragraph' href='/'>ReactJS</Link></li>
                            <li><Link className='paragraph' href='/'>KnockoutJS</Link></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="footer_links">
                            <li className='p_title'>Our Services</li>
                            <li><Link className='paragraph' href='/'>Web Application</Link></li>
                            <li><Link className='paragraph' href='/'>Mobile App Development</Link></li>
                            <li><Link className='paragraph' href='/'>Microsoft Development</Link></li>
                            <li><Link className='paragraph' href='/'>Front End Development</Link></li>
                            <li><Link className='paragraph' href='/'>eCommerce Development</Link></li>
                            <li><Link className='paragraph' href='/'>Cross-platform App</Link></li>
                            <li><Link className='paragraph' href='/'>Opensource Development</Link></li>
                            <li><Link className='paragraph' href='/'>UI/UX Design</Link></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="footer_links">
                            <li className='p_title'>On Demand Solutions</li>
                            <li><Link className='paragraph' href='/'>Taxi App</Link></li>
                            <li><Link className='paragraph' href='/'>Healthcare App</Link></li>
                            <li><Link className='paragraph' href='/'>Live Streaming App</Link></li>
                            <li><Link className='paragraph' href='/'>Food Delivering App</Link></li>
                            <li><Link className='paragraph' href='/'>ELearning App</Link></li>
                            <li><Link className='paragraph' href='/'>eWallet App Solutions</Link></li>
                            <li><Link className='paragraph' href='/'>Fantasy Sports App</Link></li>
                            <li><Link className='paragraph' href='/'>Grocery Delivery App</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6 copyright">
                        <p className='paragraph'>© 2022 All Rights Reserved By <Link className='paragraph' href='/'>Separateweb</Link></p>
                    </div>
                    <div className="col-6">
                        <ul className="site_map">
                            <li><Link className='paragraph' href='/'>Sitemap</Link></li>
                            <i className="bi bi-dot"></i>
                            <li><Link className='paragraph' href='/'>Terms of Use</Link></li>
                            <i className="bi bi-dot"></i>
                            <li><Link className='paragraph' href='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
