import Link from 'next/link'
import React from 'react'

export default function GetStarted(props) {
  return (
    <Link className={props.color === 'blue' ? 'get_started get_started_blue' : 'get_started'} href='/'>Get Started <i className="bi bi-box-arrow-in-up-right"></i></Link>
  )
}
