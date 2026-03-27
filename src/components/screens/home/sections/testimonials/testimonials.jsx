import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { TESTIMONIALS } from '@/constants/constants';
import styles from './testimonials.module.scss';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import SectionHeading from '@/components/common/section_heading/section_heading';

const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="#f5ba17" className={styles.quoteIcon}>
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

const UserAvatar = ({ name }) => {
    // A fallback avatar that uses the initial of the name with a warm background
    const initial = name.replace(/^(Mr\.|Mrs\.|Dr\.)\s*/i, '').charAt(0).toUpperCase();
    return (
        <div className={styles.avatarPlaceholder}>
            {initial}
        </div>
    );
};

const TestimonialsSection = () => {
    const prevArrow = (
        <button className={styles.navArrow} aria-label="Previous Slide">
            <ChevronLeft />
        </button>
    );

    const nextArrow = (
        <button className={styles.navArrow} aria-label="Next Slide">
            <ChevronRight />
        </button>
    );

    const responsiveSettings = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    return (
        <section className={styles.testimonialsSection}>
            <CustomContainer>
                <SectionHeading
                    head="What Our Travelers Say"
                    caption="Hear from our happy travelers around the world"
                    title="Testimonials"
                    center
                />
                <div className={styles.carouselContainer}>
                    <Slide
                        slidesToScroll={1}
                        slidesToShow={1}
                        indicators={false}
                        arrows={true}
                        prevArrow={prevArrow}
                        nextArrow={nextArrow}
                        responsive={responsiveSettings}
                        duration={4000}
                        transitionDuration={500}
                        autoplay={false}
                        infinite={true}
                    >
                        {TESTIMONIALS.map((testimonial, idx) => (
                            <div className={styles.slideWrapper} key={testimonial.id}>
                                <div className={styles.testimonialCard} data-aos="fade-up">
                                    <Row className="align-items-center g-0 h-100">
                                        <Col md={5} lg={4} className="h-100">
                                            <div className={styles.imageBlock}>
                                                <UserAvatar name={testimonial.name} />
                                            </div>
                                        </Col>
                                        <Col md={7} lg={8} className="h-100">
                                            <div className={styles.contentBlock}>
                                                <div className={styles.quoteWrapper}>
                                                    <QuoteIcon />
                                                </div>
                                                <p className={styles.reviewText}>
                                                    {testimonial.text}
                                                </p>
                                                <div className={styles.reviewerInfo}>
                                                    <h5 className={styles.reviewerName}>{testimonial.name}</h5>
                                                    <p className={styles.reviewerLocation}>{testimonial.location}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
            </CustomContainer>
        </section>
    );
};

export default TestimonialsSection;
