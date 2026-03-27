import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import styles from "./our_team.module.scss";

const OurTeamSection = () => {
    return (
        <section className={styles.ourTeamSection}>
            <CustomContainer>
                <div className={styles.wrap} data-aos="fade-up">
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className={styles.textContent}>
                                <SectionHeading
                                    head="Expertise and dedication at your service"
                                    caption="Meet the people behind your seamless journeys"
                                    title="Our Team"
                                    center={true}
                                />
                                <div className={styles.paragraphs}>
                                    <p>
                                        With decades of experience, our leadership brings together strategic thinking, operational excellence, and a deep understanding of customer needs. Our team offers expert guidance in flight bookings, accommodations, visas, insurance, and tailor-made itineraries, ensuring that every journey is meticulously planned and effortlessly executed.
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

export default OurTeamSection;
