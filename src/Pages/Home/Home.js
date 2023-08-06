import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';
import axios from 'axios';

// STYLE
import './Home.css'
import Card from '../../Components/Card/Card';
function Home() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        vertical: false,
        centerPadding: "20px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                },
            },
        ]
    };
    // LANGUAGE

    const [concerts, setConcerts] = useState([])
    const [lang, setLang] = useState(window.localStorage.getItem('i18nextLng'))
    const { i18n, t } = useTranslation(["home"])
    useEffect(() => {
        axios.get('https://backend4asad.pythonanywhere.com/api/event')
            .then(res => setConcerts(res.data))
            .catch(err => console.log(err))
        setLang(window.localStorage.getItem('i18nextLng'))
        // console.log(lang)
    }, [])
    // LANGUAGE
    const [navActive, setNavActive] = useState(false)
    const [tourActive, setTourActive] = useState(0);
    const tours = [
        {
            title: t("about_title1"),
            subtitle: t("about_subtitle1"),
            img: './slider1.jpg',
            phone: "tel:+998945552200"
        },
        {
            title: t("about_title2"),
            subtitle: t("about_subtitle2"),
            img: './slider2.jpg',
            phone: "tel:+998955552200"
        },
        {
            title: t("about_title3"),
            subtitle: t("about_subtitle3"),
            img: './slider3.jpg',
            phone: "tel:+998732432200"
        },
    ]
    function showData () {
        if (lang === "en") {
            return concerts.map(concert => {return(<Card title={concert.title_en} date={concert.date_en} time={concert.time_en} img={concert.image} />)})
        } else if (lang === "ru") {
            console.log("ru")
            return concerts.map(concert => {return(<Card title={concert.title_ru} date={concert.date_ru} time={concert.time_ru} img={concert.image} />)})
        } else if (lang === "uz") {
            console.log("uz")
            return concerts.map(concert => {return(<Card title={concert.title_uz} date={concert.date_uz} time={concert.time_uz} img={concert.image} />)})
        }
    }
    return (
        <>
            <section className='home' style={{ backgroundImage: `url('/home.jpg')` }}>
                <div className='home_overlay'></div>
                <div className='home_wrapper'>
                    <div className='home_mid'>
                        <h1>{t("home_title")}</h1>
                        <h2>{t("home_subtitle")}</h2>
                    </div>
                </div>
            </section>
            <section className='about' id='about'>
                <div className='about_layout'>
                    <h2 className='page_title'>{t("about_title")}</h2>
                    <ul className='home_tour-wrapper'>
                        {tours.map((tour, i) => (
                            <li
                            key={i}
                            style={{ backgroundImage: `url(${tour.img})` }}
                            role="button"
                            className={`home_tour-item ${tourActive === i ? 'active' : ''}`}
                            onClick={() => setTourActive(i)}
                            >
                                <h3 className='home_tour-subtitle'>{tour.title}</h3>
                                <div className="section-content">
                                    <div className="inner">
                                        <div className="bio">
                                            <h2 className='home_tour-title'>{tour.title}</h2>
                                            <p className='home_tour-descr'>{tour.subtitle}</p>
                                            <div className='home_tour-block'>
                                                <a href='tel:+998913050205'> {t("contact_button")} </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className='concerts' id='concerts'>
                <div className='page_title'>{t("concert_title")}</div>
                <div className='concerts_wrapper'>
                    {showData()}
                </div>
            </section>
        </>
    )
}

export default Home