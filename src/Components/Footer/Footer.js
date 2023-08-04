import React from 'react'
import './Footer.css'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Footer() {
    // LANGUAGE
    const { t } = useTranslation(["footer"])
    return (
        <footer id='contact'>
            <div className='footer_layout'></div>
            <section className="contact">
                <div className='contact-mid'>
                    <span className='contact_line'></span>
                    <h2 className='page_title'>Kontaktlar</h2>
                    <ul className='contact-phone'>
                        <li>
                            <p className='contact-entitle'>Murojaat:</p>
                            <a href='tel:+998945552200'>+998-94-555-22-00</a>
                        </li>
                        <li>
                            <p className='contact-entitle'>Murojaat:</p>
                            <a href='tel:+998955552200'>+998-95-555-22-00</a>
                        </li>
                        <li>
                            <p className='contact-entitle'>Murojaat:</p>
                            <a href='tel:+998732432200'>+998-73-243-22-00</a>
                        </li>
                    </ul>
                </div>
                <div className='contact-address'>
                    <h3 className='contact-title'>Manzil</h3>
                    <p className='contact-subtitle'>Farg'ona sh,Yuksalish ko'chasi. №59 uy</p>
                    <a href='https://www.google.com/maps/place/San%CA%BCat+Saroyi/@40.3748127,71.8004045,17.62z/data=!4m6!3m5!1s0x38bb84850825fca1:0x4ab914dbb2ea497c!8m2!3d40.3755945!4d71.800774!16s%2Fg%2F11c52_lyp2?hl=ru&entry=ttu'>
                        Xaritada koring
                    </a>
                </div>
            </section>
            <div className='footer_copyright'>
                <h2>Copyright 2023</h2>
                <h2>{t("copyright")} <a href='https://webmasters.uz'>Webmasters</a></h2>
            </div>
        </footer>
    )
}

export default Footer