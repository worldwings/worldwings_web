import React from "react";
import styles from "./destinations.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from "next/link";
import { POPULAR_DESTINATIONS } from "@/constants/constants";





const DestinationsSection = () => {

  const responsiveSettings = [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600, // mobile
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300, // mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <section className={styles.DestinationsSection}>
      <CustomContainer>
        <SectionHeading
          head="Popular Destinations"
          title="Destinations"
        />
        <div className={styles.cont}>

          <Slide slidesToScroll={1} slidesToShow={4} indicators={true}
            responsive={responsiveSettings}
            arrows={false}
            duration={2000}
          >
            {
              POPULAR_DESTINATIONS.map((pd) => {
                return <Link href={'/'} key={pd.name}
                  className={styles.destCard}
                >
                  <div
                    className={styles.bg}
                    style={{
                      backgroundImage: `url('/destinations/${pd.name}/${pd.images[0]}')`
                    }}
                  />
                  <p>{pd.name}</p>
                </Link>
              })
            }
          </Slide>

        </div>
      </CustomContainer>
    </section>
  );
};

export default DestinationsSection;
