import React, { useState, useEffect } from 'react'
import './Header.css'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { RxCross1 } from 'react-icons/rx'
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';

function Header() {
    const [navActive, setNavActive] = useState(false)
    // LANGUAGE
    const { i18n, t } = useTranslation(["header"])
    useEffect(() => {
        if (localStorage.getItem("i18nextLng") > 2) {
            i18next.changeLanguage("en")
        }
    }, [])

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e)
    }

    const langChange = (typeLang) =>{
        changeLanguage(typeLang)
        window.location.reload()
    }
    return (
        <header>
            <button className='header_nav-btn' onClick={() => setNavActive(true)}><HiMiniBars3BottomLeft /></button>
            <img className='header_logo' alt='logo' src='./logo.png' />
            <div className='header_mid'>
                <ul className='header_nav'>
                    <li><a href='#about'>{t("header_title1")}</a></li>
                    <li><a href='#concerts'>{t("header_title2")}</a></li>
                    <li><a href='#contact'>{t("header_title3")}</a></li>
                </ul>
                <ul className='header_lang'>
                    <li onClick={() => langChange("en")}>EN</li>
                    <li onClick={() => langChange("ru")}>RU</li>
                    <li onClick={() => langChange("uz")}>UZ</li>
                </ul>
            </div>
            <span className='header_contact'>
                <p> {t("ticket_book")} </p>
                <a href='tel:+998-94-555-22-00'> +998-94-555-22-00 </a>
            </span>
            <nav className={navActive ? 'nav nav-active' : 'nav'}>
                <div className='nav-header'>
                    <img className='nav-header_img' alt='logo' src='./logo2.png'></img>
                    <button className='nav-header_btn' onClick={() => setNavActive(false)}><RxCross1 /></button>
                </div>
                <ul className='nav-list'>
                    <li onClick={() => setNavActive(false)}><a href='#about'>{t("header_title1")}</a></li>
                    <li onClick={() => setNavActive(false)}><a href='#concerts'>{t("header_title2")}</a></li>
                    <li onClick={() => setNavActive(false)}><a href='#contact'>{t("header_title3")}</a></li>
                </ul>
                <div className='nav-end'>
                    <ul className='header_lang'>
                        <li onClick={() => changeLanguage("en")}>EN</li>
                        <li onClick={() => changeLanguage("ru")}>RU</li>
                        <li onClick={() => changeLanguage("uz")}>UZ</li>
                    </ul>
                    <span className='nav_contact'>
                        <p> {t("ticket_book")} </p>
                        <a href='tel:+998-94-555-22-00'> +998-94-555-22-00 </a>
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Header