import React, { useState, useRef } from 'react'

export default function Faq() {
    const item1Height = useRef();
    const item2Height = useRef();
    const item3Height = useRef();
    const item4Height = useRef();
    const item5Height = useRef();
    const [itemState, setItemState] = useState('');
    const buttonHandle = (args) => {
        switch (args) {
            case 'show1':
                if (itemState === 'show1') setItemState('')
                else setItemState('show1');
                break;
            case 'show2':
                if (itemState === 'show2') setItemState('')
                else setItemState('show2');
                break;
            case 'show3':
                if (itemState === 'show3') setItemState('')
                else setItemState('show3');
                break;
            case 'show4':
                if (itemState === 'show4') setItemState('')
                else setItemState('show4');
                break;
            case 'show5':
                if (itemState === 'show5') setItemState('')
                else setItemState('show5');
                break;
            default: setItemState('');
        }
    }
    return (
        <div className='container faq'>
            <div className="row align-items-center">
                <div className="col-6">
                    <img src="/images/doubt.svg" alt="" />
                </div>
                <div className="col-6">
                    <h6 className="mini_title">― Have a Doubt?</h6>
                    <h1 className="title">Frequently Asked Question</h1>
                    <ul className="categoria">
                        <li className='list_item'>
                            <button className='card_title' onClick={() => buttonHandle('show1')}>
                                <i className={itemState === 'show1' ? 'bi bi-caret-down-fill rotate_icon' : 'bi bi-caret-down-fill'}></i>Why do I need a mobile-friendly website?
                            </button>
                            <div ref={item1Height} className='item_info' style={itemState === 'show1' ? { height: item1Height.current.scrollHeight } : {}}>
                                <p className='paragraph'>This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.</p>
                            </div>
                        </li>
                        <li className='list_item'>
                            <button className='card_title' onClick={() => buttonHandle('show2')}>
                                <i className={itemState === 'show2' ? 'bi bi-caret-down-fill rotate_icon' : 'bi bi-caret-down-fill'}></i>Which Technology or Tools used for Website Designing?
                            </button>
                            <div ref={item1Height} className='item_info' style={itemState === 'show2' ? { height: item1Height.current.scrollHeight } : {}}>
                                <p className='paragraph'>This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.</p>
                            </div>
                        </li>
                        <li className='list_item'>
                            <button className='card_title' onClick={() => buttonHandle('show3')}>
                                <i className={itemState === 'show3' ? 'bi bi-caret-down-fill rotate_icon' : 'bi bi-caret-down-fill'}></i>What is the difference between custom and ready-to-use software?
                            </button>
                            <div ref={item1Height} className='item_info' style={itemState === 'show3' ? { height: item1Height.current.scrollHeight } : {}}>
                                <p className='paragraph'>This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.</p>
                            </div>
                        </li>
                        <li className='list_item'>
                            <button className='card_title' onClick={() => buttonHandle('show4')}>
                                <i className={itemState === 'show4' ? 'bi bi-caret-down-fill rotate_icon' : 'bi bi-caret-down-fill'}></i>Which is the best custom software development company in India?
                            </button>
                            <div ref={item1Height} className='item_info' style={itemState === 'show4' ? { height: item1Height.current.scrollHeight } : {}}>
                                <p className='paragraph'>This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.</p>
                            </div>
                        </li>
                        <li className='list_item'>
                            <button className='card_title' onClick={() => buttonHandle('show5')}>
                                <i className={itemState === 'show5' ? 'bi bi-caret-down-fill rotate_icon' : 'bi bi-caret-down-fill'}></i>What are the RCM challenges faced by hospitals?
                            </button>
                            <div ref={item1Height} className='item_info' style={itemState === 'show5' ? { height: item1Height.current.scrollHeight } : {}}>
                                <p className='paragraph'>This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the though the transition does limit overflow.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
