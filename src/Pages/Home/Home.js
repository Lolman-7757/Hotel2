import React, { useState, useEffect } from 'react'
// Import Swiper React components
// ICONS
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import { HiBars3 } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';
import Slider from "react-slick";

// STYLE
import './Home.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
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


    // LANGUAGE
    const { i18n, t } = useTranslation(["home"])
    useEffect(() => {
        if (localStorage.getItem("i18nextLng") > 2) {
            i18next.changeLanguage("en")
        }
    }, [])
    const [navActive, setNavActive] = useState(true)

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
            <header>
                <img src='logo2.png' alt='logo' />
                <div className='header_btns-block'>
                    {
                        navActive ? <></> : <ul className='header_lang'>
                            {
                                langs.map((lang, langID) => {
                                    return (<li
                                        key={langID}
                                        className='headerheader_lang-active'
                                        onClick={() => {
                                            changeLanguage(lang.value)
                                        }}>
                                        {lang.name}
                                    </li>)
                                })
                            }
                        </ul>
                    }
                    {
                        navActive ? <></> : <button className='header_nav-btn' onClick={() => {
                            setNavActive(!navActive)
                            console.log(navActive)
                        }}>
                            <HiBars3 />
                        </button>
                    }
                </div>
            </header>
            <section className='home' style={{ backgroundImage: `url('/home.jpg')` }}>
                <div className='home_overlay'></div>
                <div className='home_wrapper'>
                    <div className='header'>
                        <img src='logo2.png' alt='logo' />
                        <div className='header_btns-block'>
                            <ul className='header_lang'>
                                {
                                    langs.map((lang, langID) => {
                                        return (<li
                                            key={langID}
                                            onClick={() => {
                                                changeLanguage(lang.value)
                                            }}
                                            className='headerheader_lang-active'>

                                            {lang.name}
                                        </li>)
                                    })
                                }
                            </ul>
                            {/* <button className='header_nav-btn'>
                                <HiBars3 />
                            </button> */}
                        </div>
                        <ul className='header_navigation'>
                            <li><a href='#about'>{t("about_title")}</a></li>
                            <li><a href='#amenity'>{t("amenity_title")}</a></li>
                            <li><a href='#gallery'>{t("gallery_title")}</a></li>
                            <li><a href='#package'>{t("packages_title")}</a></li>
                            <li><a href='#book'>{t("booking_title")}</a></li>
                        </ul>
                    </div>
                    <div className='header_logo'>
                        <h1 className='header_title'>{t("home_title")}</h1>
                        <h3 className='header_subtitle'>{t("home_subtitle")}</h3>
                        <a href='tel:+998955094066' className='classic_btn'>{t("home_button")} <MdKeyboardArrowRight /></a>
                    </div>
                </div>
                <nav className={navActive ? 'drop drop-active' : 'drop'}>
                    <button className='header_cross-btn' onClick={() => setNavActive(false)}><RxCross1 /></button>
                    {
                        navActive ? <ul className='navHeader_lang'>
                            {
                                langs.map((lang, langID) => {
                                    return (<li
                                        key={langID}
                                        onClick={() => {
                                            changeLanguage(lang.value)
                                        }}
                                        className='headerheader_lang-active'>
                                        {lang.name}
                                    </li>)
                                })
                            }
                        </ul> : <></>
                    }
                    <ul className='header_navigation'>
                        <li><a href='#about'>{t("about_title")}</a></li>
                        <li><a href='#amenity'>{t("amenity_title")}</a></li>
                        <li><a href='#gallery'>{t("gallery_title")}</a></li>
                        <li><a href='#package'>{t("packages_title")}</a></li>
                        <li><a href='#book'>{t("booking_title")}</a></li>
                    </ul>
                </nav>
            </section>
            {/* ABOUT US  */}
            <section className='about' id='about'>
                <h2 className='page_title'>{t("about_title")}</h2>
                <h2 className='page_subtitle'>{t("about_subtitle")}</h2>
                <div className='about_wrapper'>
                    <img src='about.jpg' alt='bar' />
                    <div className='about_info'>
                        <h2 className='about_title'>{t("about_descr1")}</h2>
                        <h3 className='about_subtitle'>{t("about_descr2")}</h3>
                        <p className='about_descr'>{t("about_descr3")}</p>
                    </div>
                </div>
            </section>
            {/* AMENITIES */}
            <section className='amenity' id='amenity'>
                <h2 className='page_title'>{t("amenity_title")}</h2>
                <h2 className='page_subtitle'>{t("amenity_subtitle")}</h2>
                <div className='container'>
                    <ul className='amenity_points'>
                        <li>
                            <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/beer.svg' alt='amenity' />
                            <p>{t("amenity_point1")}</p>
                        </li>
                        <li>
                            <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/coffee.svg' alt='amenity' />
                            <p>{t("amenity_point2")}</p>
                        </li>
                        <li>
                            <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/restaurant-icon.svg' alt='amenity' />
                            <p>{t("amenity_point3")}</p>
                        </li>
                        <li>
                            <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/room-service.svg' alt='amenity' />
                            <p>{t("amenity_point4")}</p>
                        </li>
                        <li>
                            <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/reception.svg' alt='amenity' />
                            <p>{t("amenity_point5")}</p>
                        </li>
                        <li>
                            <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/car-rental.svg' alt='amenity' />
                            <p>{t("amenity_point6")}</p>
                        </li>
                        <li>
                            <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/hair-dryer.svg' alt='amenity' />
                            <p>{t("amenity_point7")}</p>
                        </li>
                        <li>
                            <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/wifi-connection.svg' alt='amenity' />
                            <p>{t("amenity_point8")}</p>
                        </li>
                    </ul>
                    <ul className='amenity_hostel'>
                        <li style={{ backgroundImage: `url('/amenity1.jpg')` }}>
                            <div className='amenity_layout'>{t("amenity_advant1")}</div>
                        </li>
                        <li style={{ backgroundImage: `url('/amenity2.jpg')` }}>
                            <div className='amenity_layout'>{t("amenity_advant2")}</div>
                        </li>
                        <li style={{ backgroundImage: `url('/amenity3.jpg')` }}>
                            <div className='amenity_layout'>{t("amenity_advant3")}</div>
                        </li>
                        <li style={{ backgroundImage: `url('/amenity4.jpg')` }}>
                            <div className='amenity_layout'>{t("amenity_advant4")}</div>
                        </li>
                        <li style={{ backgroundImage: `url('/amenity5.jpg')` }}>
                            <div className='amenity_layout'>{t("amenity_advant5")}</div>
                        </li>
                        <li>
                            <div className='amenity_layout'>{t("amenity_advant6")}</div>
                        </li>
                        <li style={{ backgroundImage: `url('/amenity7.jpg')` }}>
                            <div className='amenity_layout'>{t("amenity_advant7")}</div>
                        </li>
                        <li style={{ backgroundImage: `url('/amenity8.jpg')` }}>
                            <div className='amenity_layout'>{t("amenity_advant8")}</div>
                        </li>
                    </ul>
                </div>
                <div className='amenity_escape'>
                    <div className='amenity_escape-layout'>
                        <div className='amenity_escape-info'>
                            <h2 className='amenity_escape-title'>{t("amenity_advice1")}</h2>
                            <h2 className='amenity_escape-subtitle'>{t("amenity_advice2")}</h2>
                        </div>
                        <a href='tel:+998955094066' className='classic_btn'>{t("home_button")} <MdKeyboardArrowRight /></a>
                    </div>
                </div>
            </section>
            {/* GALLERY */}
            <section className='gallery' id='gallery'>
                <h2 className='page_title'>{t("gallery_title")}</h2>
                <h2 className='page_subtitle'>{t("gallery_subtitle")}</h2>
                <ul className='gallery_swiper'>
                    <Slider {...settings}>
                        <li><img alt="GalleryPhoto" src='/gallery1.jpg' /></li>
                        <li><img alt="GalleryPhoto" src='/gallery2.jpg' /></li>
                        <li><img alt="GalleryPhoto" src='/gallery3.jpg' /></li>
                        <li><img alt="GalleryPhoto" src='/gallery4.jpg' /></li>
                        <li><img alt="GalleryPhoto" src='/gallery5.jpg' /></li>
                        <li><img alt="GalleryPhoto" src='/gallery6.jpg' /></li>
                        <li><img alt="GalleryPhoto" src='/gallery7.jpg' /></li>
                        <li><img alt="GalleryPhoto" src='/gallery8.jpg' /></li>
                    </Slider>
                </ul>
            </section>
            {/* PACKAGES */}
            <section className='packages' id='package'>
                <h2 className='page_title'>{t("packages_title")}</h2>
                <h2 className='page_subtitle'>{t("packages_subtitle")}</h2>
                <ul className='packages_block'>
                    <li>
                        <div className='packages_img'>
                            <img src='/room1.jpg' alt='room' />
                            <div className='packages_layout'>
                                <div className='packages_layout-text'>
                                    <p>325.000 {t("packages_price")} / {t("packages_night")}</p>
                                </div>
                            </div>
                        </div>
                        <div className='packages_info'>
                            <div className='packages_title'>{t("packages1_title")}</div>
                            <div className='packages_subtitle'>{t("packages1_subtitle")}</div>
                            <ul className='packages_svg'>
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/beer.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/coffee.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/restaurant-icon.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/room-service.svg' alt='amenity' />
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='packages_img'>
                            <img src='/room2.jpg' alt='room' />
                            <div className='packages_layout'>
                                <div className='packages_layout-text'>
                                    <p>360.000 {t("packages_price")}/ {t("packages_night")}</p>
                                </div>
                            </div>
                        </div>
                        <div className='packages_info'>
                            <div className='packages_title'>{t("packages2_title")}</div>
                            <div className='packages_subtitle'>{t("packages2_subtitle")}</div>
                            <ul className='packages_svg'>
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/beer.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/coffee.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/restaurant-icon.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/room-service.svg' alt='amenity' />
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='packages_img'>
                            <img src='/room3.jpg' alt='room' />
                            <div className='packages_layout'>
                                <div className='packages_layout-text'>
                                    <p>275.000  {t("packages_price")}/ {t("packages_night")}</p>
                                </div>
                            </div>
                        </div>
                        <div className='packages_info'>
                            <div className='packages_title'>{t("packages3_title")}</div>
                            <div className='packages_subtitle'>{t("packages3_subtitle")}</div>
                            <ul className='packages_svg'>
                                <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/beer.svg' alt='amenity' />
                                <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/coffee.svg' alt='amenity' />
                                <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/restaurant-icon.svg' alt='amenity' />
                                <img src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/room-service.svg' alt='amenity' />
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='packages_img'>
                            <img src='/room4.jpg' alt='room' />
                            <div className='packages_layout'>
                                <div className='packages_layout-text'>
                                    <p>250.000 {t("packages_price")}/ {t("packages_night")}</p>
                                </div>
                            </div>
                        </div>
                        <div className='packages_info'>
                            <div className='packages_title'>{t("packages4_title")}</div>
                            <div className='packages_subtitle'>{t("packages4_subtitle")}</div>
                            <ul className='packages_svg'>
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/beer.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/coffee.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/restaurant-icon.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/room-service.svg' alt='amenity' />
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='packages_img'>
                            <img src='/room5.jpg' alt='room' />
                            <div className='packages_layout'>
                                <div className='packages_layout-text'>
                                    <p>450.000 {t("packages_price")}/ {t("packages_night")}</p>
                                </div>
                            </div>
                        </div>
                        <div className='packages_info'>
                            <div className='packages_title'>{t("packages5_title")}</div>
                            <div className='packages_subtitle'>{t("packages5_subtitle")}</div>
                            <ul className='packages_svg'>
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/beer.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/coffee.svg' alt='amenity2' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/restaurant-icon.svg' alt='amenity3' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/room-service.svg' alt='amenity4' />
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='packages_img'>
                            <img src='/room6.jpg' alt='room' />
                            <div className='packages_layout'>
                                <div className='packages_layout-text'>
                                    <p>220.000 {t("packages_price")}/ {t("packages_night")}</p>
                                </div>
                            </div>
                        </div>
                        <div className='packages_info'>
                            <div className='packages_title'>{t("packages6_title")}</div>
                            <div className='packages_subtitle'>{t("packages6_subtitle")}</div>
                            <ul className='packages_svg'>
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/beer.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/coffee.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/restaurant-icon.svg' alt='amenity' />
                                <img alt="ico" src='https://websitedemos.net/hotel-02/wp-content/uploads/sites/42/2021/03/room-service.svg' alt='amenity' />
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
            {/* SUPPORT */}
            <section className='support' id='book'>
                <form>
                    <h2 className='page_title'>{t("booking_subtitle")}</h2>
                    <input placeholder={t("booking_name")} />
                    <input placeholder={t("booking_email")} />
                    <textarea placeholder={t("booking_message")} />
                    <button className='classic_btn' type='submit'>{t("booking_send")}</button>
                </form>
            </section>

        </>
    )
}

export default Home