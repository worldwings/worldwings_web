import React from "react";
import styles from "./banner.module.scss";
import { Carousel } from "react-bootstrap";
import FONTS from "@/styles/fonts";

const BannerSection = () => {
  const bgImages = [
    {
      id: "1",
      src: "/images/hero/bg-01.webp",
    },
    {
      id: "2",
      src: "/images/hero/bg-02.webp",
    },
    {
      id: "3",
      src: "/images/hero/bg-03.webp",
    },
  ];

  return (
    <section className={styles.BannerSection}>
      <Carousel fade indicators={false} controls={false} draggable={false}>
        {bgImages.map((bg) => {
          return (
            <Carousel.Item key={bg.id}>
              <div className={styles.Banner}>
                <div
                  className={styles.bgWrap}
                  style={{
                    backgroundImage: `url('${bg.src}')`,
                  }}
                ></div>

                <div className={styles.cont}>
                  <p
                    className={FONTS.font2}
                    data-aos="fade-up"
                    data-aos-delay={1500 + 500}
                  >
                    Travel Smarter, Travel Better
                  </p>

                  <div className={FONTS.font2}>
                    <h1>
                      <span className={styles.w1} data-aos="fade-up"
                        data-aos-delay={1500 + 0}

                      >
                        Your
                      </span>
                      <span
                        className={styles.w2}
                        data-aos="fade-up"
                        data-aos-delay={1500 + 100}
                      >
                        Next
                      </span>
                      <span
                        className={styles.w3}
                        data-aos="fade-up"
                        data-aos-delay={1500 + 200}

                      >
                        Journey
                      </span>
                      <span
                        className={styles.w4}
                        data-aos="fade-up"
                        data-aos-delay={1500 + 300}

                      >
                        Begins
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default BannerSection;
