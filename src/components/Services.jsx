import React from 'react'

export default function Services() {
    return (
        <div className='container services text-center'>
            <div className="row justify-content-center">
                <div className="col-7">
                    <h1>Services We Provide</h1>
                    <p>Blueket overcomes challenges, achieves results, and adds value to our clients and partners. Take a look at some of our clients success stories.</p>
                </div>
            </div>
            <div className="row mt-5 pt-4">
                <div className="col-3">
                    <div className="services_card bg_1">
                        <img src="/images/app.png" alt="" />
                        <h2>App<br></br>Development</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="services_card bg_2">
                        <img src="/images/ux-design.png" alt="" />
                        <h2>Web<br></br>Development</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="services_card bg_3">
                        <img src="/images/content.png" alt="" />
                        <h2>Content<br></br>Marketing</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="services_card bg_4">
                        <img src="/images/online-shop.png" alt="" />
                        <h2>eCommerce<br></br>Development</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
