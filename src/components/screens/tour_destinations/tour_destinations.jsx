import React from "react";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import PageBanner from "@/components/common/page_banner/page_banner";
import styles from "./tour_destinations.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const TourDestinationsScreen = ({ type, destinations, title, bannerImage }) => {
  return (
    <>
      <Head>
        <title>{title} - World Wings</title>
        <meta name="description" content={`Explore our range of ${title} packages.`} />
      </Head>
      <div className={styles.tourDestinationsPage}>
        <PageBanner
          title={title}
          image={bannerImage || "/images/international.jpg"}
        />

        <CustomContainer>
          <div className={styles.destinationsGrid}>
            {destinations.map((dest, idx) => (
              <Link
                href={dest.href}
                key={dest.title}
                className={styles.destCard}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={dest.image || "/images/domestic.jpg"}
                    alt={dest.title}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.content}>
                  <h3>{dest.title}</h3>
                  <span className={styles.btn}>Explore Tours</span>
                </div>
              </Link>
            ))}
          </div>
        </CustomContainer>
      </div>
    </>
  );
};

export default TourDestinationsScreen;
