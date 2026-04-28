import React from "react";
// import Image from "next/image";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import styles from "./registered_members.module.scss";
import { Image } from "react-bootstrap";

const logos = [
    { src: "/images/about us/registered_members_logo/IATA.png", alt: "IATA" },
    { src: "/images/about us/registered_members_logo/TAFI.png", alt: "TAFI" },
    { src: "/images/about us/registered_members_logo/IAAI.png", alt: "IAAI" },
    { src: "/images/about us/registered_members_logo/OTOAI.png", alt: "OTOAI" },
    { src: "/images/about us/registered_members_logo/Incredible_India.png", alt: "Incredible India" },
    { src: "/images/about us/registered_members_logo/UTEN.png", alt: "UTEN" },
];

const RegisteredMembersSection = () => {
    return (
        <section className={styles.registeredMembersSection}>
            <CustomContainer>
                <div data-aos="fade-up">
                    <SectionHeading
                        head="Officially recognized and globally connected"
                        caption="Certifications & Memberships"
                        title="Registered Memberships"
                        center

                    />
                    <div className={styles.logosGrid}>
                        {logos.map((logo, index) => (
                            <div key={index} className={styles.logoItem}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={180}
                                    height={90}
                                    className={styles.logoImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
};

export default RegisteredMembersSection;
