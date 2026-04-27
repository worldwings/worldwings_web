import React from "react";
import Image from "next/image";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import styles from "./registered_members.module.scss";

const logos = [
    { src: "/images/about us/Registered Members Logo/01 IATA Logo-01.png", alt: "IATA" },
    { src: "/images/about us/Registered Members Logo/02 TAFI-01.png", alt: "TAFI" },
    { src: "/images/about us/Registered Members Logo/03 IAAI-01.png", alt: "IAAI" },
    { src: "/images/about us/Registered Members Logo/04 Otoai-01.png", alt: "OTOAI" },
    { src: "/images/about us/Registered Members Logo/05 Incredible-01.png", alt: "Incredible India" },
    { src: "/images/about us/Registered Members Logo/06 Uten-01.png", alt: "UTEN" },
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
