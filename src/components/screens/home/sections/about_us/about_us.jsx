import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import styles from "./about_us.module.scss";

const AboutUsSection = () => {
    const logos = [
        { name: "IAAI", desc: "Approved", imgSrc: "/images/association/IAAI.jpg" },
        { name: "IATA", desc: "Approved Agency", imgSrc: "/images/association/IATA.jpg" },
        { name: "TAFI", desc: "Member", imgSrc: "/images/association/TAFI.jpg" },
        { name: "TAAI", desc: "Member", imgSrc: "/images/association/TAAI.jpg" },
        { name: "OTOAI", desc: "Member", imgSrc: "/images/association/OTOAI.jpg" },
    ];

    return (
        <section className={styles.aboutUsSection}>
            <CustomContainer>
                {/* Top Approval Banner */}
                {/* <div className={styles.approvalBanner} data-aos="fade-up">
                    <div className={styles.bannerIcon}>
                        <img src="/logo/logo.png" alt="World Wings" />
                    </div>
                    <div className={styles.bannerText}>
                        <h4>Approved by Ministry of Tourism, Government of India</h4>
                        <p>
                            The Ministry of Tourism is the nodal agency for the formulation of national policies and programs and for the co-ordination of activities of various Central Government Agencies, State Governments/UTs and the Private Sector for the development and promotion of tourism in the country.
                        </p>
                    </div>
                </div> */}



                {/* Main About Content */}
                <div className={styles.mainAboutContent} data-aos="fade-up" data-aos-delay="200">
                    <Row >
                        <Col lg={5} >
                            <div className={styles.imageBlock}>
                                {/* Fallback pattern / image placeholder for the About representation */}
                                <div className={styles.imageOverlay}>
                                    <h3>30+</h3>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className={styles.textContent}>
                                <SectionHeading
                                    head="World Wings Tours and Travels"
                                    caption="Your trusted partner in global journeys"
                                    title="About Us"
                                />

                                <div className={styles.paragraphs}>
                                    <p>
                                        <strong>World Wings Tours and Travels</strong> is an IATA approved agency and a member of TAFI (Travel Agents Federation of India) and TAAI (Travel Agents Association of India). The agency originated in Trichy and branched in Chennai.
                                    </p>

                                    <p>
                                        The agency has been promoted by a Travel professional <strong>Dr. P. PATHINATHAN</strong> who has more than 30 years combined experience in the Airline Ticketing and Travel agency fields. He is also an Ex-serviceman retired from IAF, having traveled to around 65 countries.
                                    </p>

                                    <p>
                                        This agency started with an objective of offering true service to the traveling public. We have a specially dedicated team to formulate travel planning for Holy Tours, Business travelers, Honeymoon Tours, Commercial travelers, students I.V. Tour, Family pleasure tours, MICE tours and everything else in between to guarantee that when it comes to taking a trip you have everything you need, at the tip of your fingers.
                                    </p>

                                    <p>
                                        We arrange wedding packages, film shooting packages, and cinematography packages. We also expertly handle tourist visa and business visa processing for Canada, USA, Australia, Europe and all other countries worldwide.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Member Logos Strip */}
                <div className={styles.logosStrip} data-aos="fade-up" data-aos-delay="100">
                    <p className={styles.logosTitle}>We are a proud member of</p>
                    <div className={styles.logoGrid}>
                        {logos.map((logo, idx) => (
                            <div key={idx} className={styles.logoItem}>
                                <Image src={logo.imgSrc} width={120} />
                            </div>
                        ))}
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
};

export default AboutUsSection;
