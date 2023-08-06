import React, { useState } from 'react'
import './Card.css'
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';
function Card({ img, date, title, time }) {
    const [lang, setLang] = useState(window.localStorage.getItem('i18nextLng'))
    const { i18n, t } = useTranslation(["home"])
    return (
        <div className='card'>
            <img src={img} alt='Concert Photo' />
            <div className='card_layout'>
                <p className='card_title'>{title}</p>
                <a href='' className='card_btn'>
                    {t("book_ticket")}
                </a>
                <span>
                    <p className='card_date'>{date}</p>
                    <p className='card_time'>{time}</p>
                </span>
            </div>
        </div>
    )
}

export default Card