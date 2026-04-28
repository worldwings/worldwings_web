import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./tours.module.scss";
import Link from "next/link";

const ToursSection = () => {
  const TOURS = [
    {
      name: "Domestic Tours",
      imgSrc: "/images/Domestic Tour_ Home Page  Poster.jpg",
      saveText: "Save Up to 30% on Next Adventure!",
      buttonText: "Book Today",
      href: "/tours/domestic/north_india"
    },
    {
      name: "International Tours",
      imgSrc: "/images/international tour_ Home Page Poster.jpg",
      saveText: "Save Up to 30% on Next Adventure!",
      buttonText: "Book Today",
      href: "/tours/international/asia"
    },
    {
      name: "Visa Services",
      imgSrc: "/images/Visa_ Home Page Poster.jpg",
      saveText: "Hassle-Free Visa Assistance for All Destinations!",
      buttonText: "Apply Today",
      href: "/visas"
    },
  ];

  return (
    <section className={styles.ToursSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          {TOURS.map((tour, idx) => {
            return (
              <Link
                href={tour.href}
                className={styles.tour}
                key={tour.name}
                style={{
                  backgroundImage: `url('${tour.imgSrc}')`,
                }}
                data-aos="fade-left"
                data-aos-delay={idx * 100}
              >
                <p>{tour.buttonText}</p>
                <h3>{tour.name}</h3>
                <h4>{tour.saveText}</h4>
              </Link>
            );
          })}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ToursSection;
