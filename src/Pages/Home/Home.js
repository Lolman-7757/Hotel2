import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';

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
    const tours = [
        {
            title: "San'at Teatri",
            subtitle: "Ислом Каримов номидаги Фарғона вилоят театр ва концерт саройи Ўзбекистон Республикаси Вазирлар Махкамасининг 2014 йил 25 июндаги “Фарғона вилоят Театр-концерт саройи фаолиятини ташкил этиш тўғрисида”ги 170-сонли  қарорига асосан ташкил этилган.",
            img: './slider1.jpg',
            phone: "tel:+998945552200"
        },
        {
            title: "Teatr sig'imi",
            subtitle: "Театр ва концерт саройи томошабинлар зали 925 нафар томошабинга мўлжалланган. Театр ва концерт саройи ёзги амфитеатри 643 нафар томошабинга мўлжалланган. Театр ва концерт саройи саньатнинг концерт, спектакль ва кино намойишлари учун барча шароит ва қулайликларга эга.",
            img: './slider2.jpg',
            phone: "tel:+998955552200"
        },
        {
            title: "Bino tuzilishi",
            subtitle: "Санъаткорлар учун 40 кишилик 14 та артистлар хонаси мавжуд бўлиб, ювиниш хоналари, юмшоқ мебеллар билан жиҳозланган. Театр ва концерт саройида маънавият хонаси, кутубхона, рақс ва тўгараклар учун 2 та кичик зал, овоз ёзиш студияси хамда оркестр чолғучилари учун яма, рассомлар устахонаси ва чевархона фаолият кўрсатади.",
            img: './slider3.jpg',
            phone: "tel:+998732432200"
        },
    ]
    const concerts = [
        {
            title: "Dildora Niyozova",
            date: "9-10 SENTABR",
            time: "14:00 va 18:00",
            img: "./concert1.jpg"
        },
        {
            title: "Million",
            date: "6 AVGUST",
            time: "14:00 va 18:00",
            img: "./concert2.jpg"
        },
        {
            title: "Xamdam Sobirov",
            date: "23 SENTABR",
            time: "14:00 va 18:00",
            img: "./concert3.jpg"
        },
    ]

    // LANGUAGE
    const { i18n, t } = useTranslation(["home"])
    useEffect(() => {
        if (localStorage.getItem("i18nextLng") > 2) {
            i18next.changeLanguage("en")
        }
    }, [])
    const [navActive, setNavActive] = useState(false)
    const [tourActive, setTourActive] = useState(0);
    const langs = [
        { name: "EN", value: "en" },
        { name: "RU", value: "ru" },
        { name: "UZ", value: "uz" },
    ]

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e)
    }
    return (
        <>
            <section className='home' style={{ backgroundImage: `url('/home.jpg')` }}>
                <div className='home_overlay'></div>
                <div className='home_wrapper'>
                    <div className='home_mid'>
                        <h1>ISLAM KARIMOV</h1>
                        <h2>NOMIDAGI SAN'AT SAROYI</h2>
                    </div>
                </div>
            </section>
            <section className='about'>
                <div className='about_layout'>
                    <h2 className='page_title'>Biz Haqimizda</h2>
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
                                                <a href='tel:+998913050205'> Biz bilan bog'lanish </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className='concerts'>
                <div className='page_title'>Kelayotgan Koncertlar</div>
                <div className='concerts_wrapper'>
                    {
                        concerts.map(concert =>(
                            <Card title = {concert.title} date = {concert.date} time = {concert.time} img = {concert.img} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Home