import React from 'react'
import './Card.css'
function Card({ img, date, title, time }) {
    return (
        <div className='card'>
            <img src={img} alt='Concert Photo' />
            <div className='card_layout'>
                <p className='card_title'>{title}</p>
                <a href='' className='card_btn'>
                    СHIPTA OLISH
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