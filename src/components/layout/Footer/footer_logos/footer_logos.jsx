import React from "react";
import styles from "./footer_logos.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const FooterLogos = () => {
  const logos = [
    { src: "/images/about_us/registered_members_logo/IATA.png", alt: "IATA" },
    { src: "/images/about_us/registered_members_logo/TAFI.png", alt: "TAFI" },
    { src: "/images/about_us/registered_members_logo/IAAI.png", alt: "IAAI" },
    { src: "/images/about_us/registered_members_logo/OTOAI.png", alt: "OTOAI" },
    {
      src: "/images/about_us/registered_members_logo/Incredible_India.png",
      alt: "Incredible India",
    },
    { src: "/images/about_us/registered_members_logo/UTEN.png", alt: "UTEN" },
  ];

  return (
    <div className={styles.FooterLogos}>
      <CustomContainer>
        <div className={styles.wrap}>
          {logos.map((logo) => {
            return (
              <div key={logo.alt} >
                <Image alt={logo.alt} src={logo.src} width={90}/>
              </div>
            );
          })}
        </div>
      </CustomContainer>
    </div>
  );
};

export default FooterLogos;
