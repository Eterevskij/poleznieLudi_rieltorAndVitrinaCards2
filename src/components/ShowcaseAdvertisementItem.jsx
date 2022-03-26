import { React, useState, useRef } from 'react';
import { Row, Col, Carousel } from 'antd';
import 'antd/dist/antd.css';

import { LeftOutlined, RightOutlined, HeartFilled } from '@ant-design/icons';

const LeftButton = (props) => {
    let { showPrev } = props;

    return (
        <div onClick={() => showPrev()} className="sliderBTNWrapper left">
            <LeftOutlined />
        </div>
    )
}

const RightButton = (props) => {
    let { showNext } = props;

    return (
        <div onClick={() => showNext()} className="sliderBTNWrapper right">
            <RightOutlined />
        </div>
    )
}

const ShowcaseAdvertisementItem = (props) => {

    debugger

    const carousel = useRef();

    const handleNext = () => carousel.current.next();
    const handlePrev = () => carousel.current.prev();

    const [isPhoneChown, setShow] = useState(false);
    const [isLikeActive, setLike] = useState(false);

    let {title, photos, location, userPhoto, userName, publishedDate, catigories, phone, price} = props;


    return (
        <div className="ShowcaseAdvertisement__list__item">
            <Row className='ShowcaseAdvertisement__list__item__wrapper'>

                <Col xl={8} lg={10} md={12} sm={12} xs={12} className='ShowcaseAdvertisement__list__item__left'>
                    <Carousel
                        ref={carousel}
                        draggable={true}
                        dots={true}
                        arrows={true}
                        infinite={true}
                        nextArrow={<LeftButton showPrev={handlePrev} />}
                        prevArrow={<RightButton showNext={handleNext} />}>

                        {
                            photos.map(photo => {
                                return <div className='carouselSlide'><img src={photo} alt="" /></div>  
                            })
                        }

                    </Carousel>
                </Col>

                <Col className='ShowcaseAdvertisement__list__item__right' flex="auto">

                    <Row justify='space-between'>

                        <Col span={24}>
                            <h6 className="ShowcaseAdvertisement__list__item__right__title">{title}</h6>
                            <p className="ShowcaseAdvertisement__list__item__right__location">{location}</p>

                            <div className="ShowcaseAdvertisement__list__item__right__categories">
                                <Row gutter={[8, 8]}>
                                    
                                    {
                                        catigories.map( category => {
                                            return <Col><p className="ShowcaseAdvertisement__list__item__right__categories__item">{category}</p></Col>
                                        })
                                    }

                                </Row>
                            </div>
                        </Col>

                        <Col span={24}>

                            <div className="ShowcaseAdvertisement__list__item__right__priceAndContacts__wrapper">

                                <div className="ShowcaseAdvertisement__list__item__right__priceAndContacts">
                                    <div className="ShowcaseAdvertisement__list__item__right__priceAndContacts__price__wrapper">
                                        <h4 className="ShowcaseAdvertisement__list__item__right__priceAndContacts__price">{price.total}</h4>
                                        <p className="ShowcaseAdvertisement__list__item__right__priceAndContacts__priceForSqrM">{price.ForSqrM}/м²</p>
                                    </div>
                                </div>

                                <div className="ShowcaseAdvertisement__list__item__right__contacts desktop">

                                    <Row justify='space-between' align='middle' >

                                        <Col>
                                        
                                            <Row align='middle'>
                                                <Col>
                                                    <img src={userPhoto} alt="" />
                                                </Col>

                                                <Col>
                                                    <div className="ShowcaseAdvertisement__list__item__right__contacts__nameAndDate">
                                                        <p className="ShowcaseAdvertisement__list__item__right__contacts__nameAndDate__name">Лукманова Лилия</p>
                                                        <p className="ShowcaseAdvertisement__list__item__right__contacts__nameAndDate__date">Выложено: сегодня</p>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </Col>


                                        <Col>
                                            <Row align='middle' wrap={false} justify="end" >
                                                <Col><div onClick={() => setLike(!isLikeActive)} className="ShowcaseAdvertisement__list__item__right__feedbackAndContacts__addToFavourite"><HeartFilled className={isLikeActive ? 'active' : ''} /></div></Col>

                                                <Col flex="auto">
                                                    <span onClick={() => setShow(true)} className={`ShowcaseAdvertisement__list__item__right__feedbackAndContacts__phone ${isPhoneChown ? 'phone' : 'text'}`}>{isPhoneChown ? <a href={`tel:${phone.compressed}`}>{phone.expanded}</a> : 'Показать телефон'}</span>
                                                </Col>
                                            </Row>
                                        </Col>

                                    </Row>
                                </div>

                            </div>

                        </Col>


                    </Row>

                </Col>

            </Row>


            <div className="ShowcaseAdvertisement__list__item__right__contacts mobile">
                <Row justify='space-between' align='middle' >

                    <Col>

                        <Row align='middle'>
                            <Col>
                                <img src={userPhoto} alt="" />
                            </Col>

                            <Col>
                                <div className="ShowcaseAdvertisement__list__item__right__contacts__nameAndDate">
                                    <p className="ShowcaseAdvertisement__list__item__right__contacts__nameAndDate__name">Лукманова Лилия</p>
                                    <p className="ShowcaseAdvertisement__list__item__right__contacts__nameAndDate__date">Выложено: сегодня</p>
                                </div>
                            </Col>

                        </Row>
                    </Col>


                    <Col className='ShowcaseAdvertisement__list__item__right__feedbackAndContacts__wrapper'>
                        <Row align='middle' wrap={false} justify="end" >
                            <Col><div onClick={() => setLike(!isLikeActive)} className="ShowcaseAdvertisement__list__item__right__feedbackAndContacts__addToFavourite"><HeartFilled className={isLikeActive ? 'active' : ''} /></div></Col>

                            <Col flex="auto">
                                <span onClick={() => setShow(true)} className={`ShowcaseAdvertisement__list__item__right__feedbackAndContacts__phone ${isPhoneChown ? 'phone' : 'text'}`}>{isPhoneChown ? <a href={`tel:${phone.compressed}`}>{phone.expanded}</a> : 'Показать телефон'}</span>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>

        </div>
    )
}

export default ShowcaseAdvertisementItem;