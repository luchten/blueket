import React from 'react'
import Link from 'next/link'

export default function News() {
    return (
        <div className='news_wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h6 className="mini_title">Stay Updated</h6>
                        <h1 className='title'>News & blog Updates</h1>
                    </div>
                </div>
                <div className="row card_row">
                    <div className="col-4 p-0">
                        <Link href='/'>
                            <div className="news_card">
                                <div className="news_card_info">
                                    <p className="paragraph">March 7, 2022</p>
                                    <p className="paragraph">20 <i className="bi bi-eye-fill"></i></p>
                                </div>
                                <img src="/images/uiuxdesign.jpg" alt="" />
                                <h2 className="card_title">Free UI/UX Tutorials & Tools: The Learn UI Design Blog</h2>
                                <p className="paragraph">A design blog by Tom Smile on typography, color, layout, UX, design process.</p>
                            </div>
                            <div className="card_footer">
                                <p className="paragraph">READ ARTICLE</p>
                                <i class="bi bi-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 p-0">
                        <Link href='/'>
                            <div className="news_card">
                                <div className="news_card_info">
                                    <p className="paragraph">March 7, 2022</p>
                                    <p className="paragraph">20 <i className="bi bi-eye-fill"></i></p>
                                </div>
                                <img src="/images/marketing.jpg" alt="" />
                                <h2 className="card_title">5 Marketing Tips to Follow for Their Expertise & Best Practices</h2>
                                <p className="paragraph">When doing research for your own publications or simply educating oneself on</p>
                            </div>
                            <div className="card_footer">
                                <p className="paragraph">READ ARTICLE</p>
                                <i class="bi bi-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 p-0">
                        <Link href='/'>
                            <div className="news_card">
                                <div className="news_card_info">
                                    <p className="paragraph">March 7, 2022</p>
                                    <p className="paragraph">20 <i className="bi bi-eye-fill"></i></p>
                                </div>
                                <img src="/images/app-design.jpg" alt="" />
                                <h2 className="card_title">How Technology Trends are Changing the app Industry</h2>
                                <p className="paragraph">The app sector, particularly the grocery market, is quite unpredictable.</p>
                            </div>
                            <div className="card_footer">
                                <p className="paragraph">READ ARTICLE</p>
                                <i class="bi bi-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
