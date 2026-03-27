import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import styles from "./our_story.module.scss";

const OurStorySection = () => {
    return (
        <section className={styles.ourStorySection}>
            <CustomContainer>
                <div className={styles.wrap} data-aos="fade-up">
                    <Row className="align-items-center">
                        <Col lg={6} className="order-lg-2">
                            <div className={styles.imageBlock}>
                                <div className={styles.imageOverlay}>
                                    <h3>Since 1995</h3>
                                    <p>A Legacy of Trust</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="order-lg-1">
                            <div className={styles.textContent}>
                                <SectionHeading
                                    head="A journey built on trust and integrity"
                                    caption="From Trichy to the World"
                                    title="Our Story"
                                />
                                <div className={styles.paragraphs}>
                                    <p>
                                        Founded in 1995 by <strong>Ln. Dr. P. Pathinathan (Ex-Air Force)</strong>, World Wings Tours and Travels began its journey in Trichy with a mission to provide trusted and comprehensive travel services. Built on a strong foundation of discipline, integrity, and customer-first values, the company steadily grew and expanded its presence.
                                    </p>
                                    <p>
                                        In 2009, we extended our operations to Chennai, offering the same high standards of service and personalized support. The Trichy office operates in partnership with Christy Marshall, while the Chennai Office is led by Marshall Arokeya Raj Jesu, ensuring consistent service excellence across both locations.
                                    </p>
                                    <p>
                                        As an IATA-certified agency and an active member of TAAI, TAFI, and OTOAI, we are committed to delivering end-to-end travel solutions that blend global standards with local expertise—helping travellers and businesses explore the world with confidence.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </CustomContainer>
        </section>
    );
};

export default OurStorySection;
