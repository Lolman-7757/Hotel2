import React from 'react'
import './Footer.css'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Footer() {
    // LANGUAGE
    const { t } = useTranslation(["footer"])
    return (
        <footer>
            <img className='footer_logo' src='logo.png' alt='logo' />
            <ul className='footer_navigation'>
                <li><a href='#about'>{t("about_title")}</a></li>
                <li><a href='#amenity'>{t("amenity_title")}</a></li>
                <li><a href='#gallery'>{t("gallery_title")}</a></li>
                <li><a href='#package'>{t("packages_title")}</a></li>
                <li><a href='#book'>{t("booking_title")}</a></li>
            </ul>
            <div className='footer_contacts'>
                <div className='footer_numbers'>
                    <a href='tel:+998901568088'>+998901568088</a>
                    <a href='tel:+998692277979'>+998692277979</a>
                </div>
                <div className='footer_media'>
                    <a href='https://www.instagram.com/musavvir_hotell'><BsInstagram /></a>
                    <a href='https://t.me/hotel_musavvir'><BsTelegram /></a>
                </div>
                <p className='footer_adress'>{t("address")}</p>
            </div>
            <div className='footer_copyright'>
                <h2>Copyright 2023</h2>
                <h2>{t("copyright")} <a href='https://webmasters.uz'>Webmasters</a></h2>
            </div>
        </footer>
    )
}

export default Footer