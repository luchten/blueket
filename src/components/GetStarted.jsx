import Link from 'next/link'
import React from 'react'
import styles from '../styles/GetStarted.module.css'

export default function GetStarted() {
  return (
    <Link className={styles.get_started} href='/'>Get Started <i className="bi bi-box-arrow-in-up-right"></i></Link>
  )
}
