import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel fade pause='hover' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.motor1.com/images/mgl/MGlA8/s3/long-beach-blue-pearl---acura.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to AAA AUTO</h3>
                    <p>Get exclusive offers fast </p>
                    <p>Volume discount for traders </p>
                    <button>Become a partner</button>
                    <button>Log in</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.businessinsider.in/photo/81506863/Master.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to AAA AUTO</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.businessonline.it/news/original/toyota-bz4x-perch-conviene-comprare-o-no-il-suv-elettrico-totalmente-nuovo-pregi-e-difetti-6517041.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;