import React, { useState } from 'react'
import './Header.css'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { RxCross1 } from 'react-icons/rx'

function Header() {

    const [navActive, setNavActive] = useState(false)

    return (
        <header>
            <button className='header_nav-btn' onClick={() => setNavActive(true)}><HiMiniBars3BottomLeft /></button>
            <img className='header_logo' alt='logo' src='./logo.png' />
            <div className='header_mid'>
                <ul className='header_nav'>
                    <li><a href='#'>Biz Haqimizda</a></li>
                    <li><a href='#'>Concertlar</a></li>
                    <li><a href='#'>Tadbirlar</a></li>
                    <li><a href='#'>Kontaktlar</a></li>
                </ul>
                <ul className='header_lang'>
                    <li>EN</li>
                    <li>RU</li>
                    <li>UZ</li>
                </ul>
            </div>
            <span className='header_contact'>
                <p> Chipta bron qilish </p>
                <a href='tel:+998-94-555-22-00'> +998-94-555-22-00 </a>
            </span>
            <nav className={navActive ? 'nav nav-active' : 'nav'}>
                <div className='nav-header'>
                    <img className='nav-header_img' alt='logo' src='./logo2.png'></img>
                    <button className='nav-header_btn' onClick={() => setNavActive(false)}><RxCross1 /></button>
                </div>
                <ul className='nav-list'>
                    <li><a href='#'>Biz Haqimizda</a></li>
                    <li><a href='#'>Concertlar</a></li>
                    <li><a href='#'>Tadbirlar</a></li>
                    <li><a href='#'>Kontaktlar</a></li>
                </ul>
                <div className='nav-end'>
                    <ul className='header_lang'>
                        <li>EN</li>
                        <li>RU</li>
                        <li>UZ</li>
                    </ul>
                    <span className='nav_contact'>
                        <p> Chipta bron qilish </p>
                        <a href='tel:+998-94-555-22-00'> +998-94-555-22-00 </a>
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Header