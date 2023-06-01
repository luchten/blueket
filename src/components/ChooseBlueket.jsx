import React from 'react'

export default function ChooseBlueket() {
  return (
    <div className='choose_wrapper'>
        <div className="container">
            <h6 className="mini_title">― Why Blueket?</h6>
            <h1 className="title">Why Choose Blueket For Web Development?</h1>
            <div className="row choose_row">
                <div className="col-3">
                    <div className="choose_card">
                        <img src="/images/analyz.png" alt="" />
                        <h2 className="card_title">Analyze Project</h2>
                        <p className='paragraph'>We prioritise studying your project, brand, status, and future goals. The first goal will be to locate your competitors.</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="choose_card">
                        <img src="/images/idea.png" alt="" />
                        <h2 className="card_title">Unique Ideas</h2>
                        <p className='paragraph'>We prioritise studying your project, brand, status, and future goals. The first goal will be to locate your competitors.</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="choose_card">
                        <img src="/images/optimization.png" alt="" />
                        <h2 className="card_title">Optimization</h2>
                        <p className='paragraph'>We prioritise studying your project, brand, status, and future goals. The first goal will be to locate your competitors.</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="choose_card">
                        <img src="/images/technical-support.png" alt="" />
                        <h2 className="card_title">Support</h2>
                        <p className='paragraph'>We prioritise studying your project, brand, status, and future goals. The first goal will be to locate your competitors.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
