import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.motor1.com/images/mgl/MGlA8/s3/long-beach-blue-pearl---acura.jpg"
                    alt="First slide"
                    style={{ height: '700px' }}
                />
                <Carousel.Caption className='card-img-overlay'>
                    <h1>Welcome to Automotive</h1>
                    <p className='fs-3'>Get exclusive offers fast </p>
                    <p className='fs-3'>Volume discount for traders </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.businessinsider.in/photo/81506863/Master.jpg"
                    alt="Second slide"
                    style={{ height: '700px' }}
                />
                <Carousel.Caption className='card-img-overlay'>
                    <p>Get exclusive offers fast </p>
                    <p>Volume discount for traders </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.businessonline.it/news/original/toyota-bz4x-perch-conviene-comprare-o-no-il-suv-elettrico-totalmente-nuovo-pregi-e-difetti-6517041.jpg"
                    alt="Third slide"
                    style={{ height: '700px' }}
                />
                <Carousel.Caption className='card-img-overlay'>
                    <p>Get exclusive offers fast </p>
                    <p>Volume discount for traders </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;