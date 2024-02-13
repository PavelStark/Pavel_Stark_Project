import React from 'react'
import style from './Header.module.css'
import logo from '../../ui/logo.png'
import cartLogo from '../../ui/basketLogo.png'
import { Link } from 'react-router-dom'


export default function Header() {

  return (
    <div className="wrapper">
      <header>
        <div>
        <Link to={'/'}>
            <img src={logo} alt='Logo' />
        </Link>
      </div>
      <div className={style.navbar}>
            <Link to={'/'}> Main Page </Link>
            <Link to={'/categories/all'}> Categories </Link>
            <Link to={'/products/all'}> All products </Link>
            <Link to={'/sales/all'}> All sales </Link>
        </div>
        <div className={style.basketItem}>
          <Link to={'/cart/'}>
            <div className={style.cartCircleContainer}>
              <div className={style.circle}>
                <p>{1}</p>
              </div>
              <img src={cartLogo} alt='CartLogo' />
            </div>
            </Link>
        </div>
        <div className={style.line}>
        </div>
      </header>
    </div>
  )
}

