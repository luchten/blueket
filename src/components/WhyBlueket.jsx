import React from 'react'

export default function WhyBlueket() {
    return (
        <div className='container why_blueket'>
            <div className="row align-items-center">
                <div className="col-6 why_collage">
                    <div className="square_shape"></div>
                    <div className="circle_shape"></div>
                    <div className="row align-items-end mb-4">
                        <div className="col-4">
                            <img src="/images/developer.jpg" alt="" />
                        </div>
                        <div className="col-6">
                            <img src="/images/developer-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 offset-1">
                            <img src="/images/compute-1.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <img src="/images/computer.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h6 className="mini_title">― Why Blueket?</h6>
                    <h2 className='title'>Why Hire The Blueket As Your Mobile App Development Company?</h2>
                    <div className="why_card">
                        <img src="/images/experience.png" alt="" />
                        <div>
                            <h3 className='card_title'>Experienced & Skilled Resources</h3>
                            <p className='paragraph'>Blueket is a company that specialises in risk management and general safety. We will bring value to your business farm while also ensuring.</p>
                        </div>
                    </div>
                    <div className="why_card">
                        <img src="/images/on-time.png" alt="" />
                        <div>
                            <h3 className='card_title'>Cost-effective & On-time Delivery</h3>
                            <p className='paragraph'>If you think to have a better outcome with low cost then Blueket is the one. We are offering the best technology solution at an affordable price.</p>
                        </div>
                    </div>
                    <div className="why_card">
                        <img src="/images/investment.png" alt="" />
                        <div>
                            <h3 className='card_title'>Flexible Pricing & Working Models</h3>
                            <p className='paragraph'>We always ensure that our task is handed over within the given time. Our main priority is customers gratification.</p>
                        </div>
                    </div>
                    <div className="why_card">
                        <img src="/images/online-learning.png" alt="" />
                        <div>
                            <h3 className='card_title'>No Expenses on Training & Retaining</h3>
                            <p className='paragraph'>We always ensure that our task is handed over within the given time. Our main priority is customers gratification.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
