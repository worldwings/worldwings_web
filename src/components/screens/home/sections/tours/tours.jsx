import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./tours.module.scss";

const ToursSection = () => {
  const TOURS = [
    {
      name: "Domestic Tours",
      imgSrc: "/images/domestic.jpg",
    },
    {
      name: "International Tours",
      imgSrc: "/images/international.jpg",
    },
    {
      name: "Inbound Tours",
      imgSrc: "/images/inbound.webp",
    },
  ];

  return (
    <section className={styles.ToursSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          {TOURS.map((tour, idx) => {
            return (
              <div
                className={styles.tour}
                key={tour.name}
                style={{
                  backgroundImage: `url('${tour.imgSrc}')`,
                }}
                data-aos="fade-left"
                data-aos-delay={idx * 100}
              >
                <p>Book Today</p>
                <h3>{tour.name}</h3>
                <h4>Save Up to 30% on Next Adventure!</h4>
              </div>
            );
          })}
        </div>
      </CustomContainer>
    </section>
  );
};

export default ToursSection;
