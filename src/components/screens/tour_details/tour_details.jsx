import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./tour_details.module.scss";
import { Image } from "react-bootstrap";

import { default as NextImage } from "next/image";

import Link from "next/link";
import PageBanner from "@/components/common/page_banner/page_banner";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "react-bootstrap-icons";

const TourDetailsScreen = ({ tour = {}, detailsHTML, parsedData, docUrl }) => {
  const json = parsedData || {};
  const coverImage = tour?.images?.[0] || "/images/about_banner.webp";
  const [curremtImageIndex, setCurrentImageIndex] = useState(null);

  const isGalleryAtTop = false;

  return (
    <>
      <div className={styles.detailsPage}>
        <PageBanner title={tour?.name} image={coverImage} />

        {curremtImageIndex !== null && (
          <div className={styles.fullScreen}>
            <div>
              {curremtImageIndex !== 0 && (
                <ChevronLeft
                  className={styles.leftBtn}
                  onClick={() => setCurrentImageIndex(curremtImageIndex - 1)}
                />
              )}
              <X
                onClick={() => {
                  setCurrentImageIndex(null);
                }}
                className={styles.closeBtn}
              />
              <Image src={tour?.images?.[curremtImageIndex]} alt="xx" />
              {curremtImageIndex !== tour?.images?.length - 1 && (
                <ChevronRight
                  className={styles.rightBtn}
                  onClick={() => setCurrentImageIndex(curremtImageIndex + 1)}
                />
              )}
            </div>
          </div>
        )}
        <CustomContainer>
          {tour?.images && tour?.images.length > 0 && isGalleryAtTop && (
            <div className={styles.gallerySection}>
              {/* <h2>Image Gallery</h2> */}
              <div className={styles.galleryGrid}>
                {tour?.images.map((img, index) => (
                  <div key={index} className={styles.galleryImageWrap}>
                    <NextImage
                      src={img}
                      alt={`${tour?.title} photo ${index + 1}`}
                      fill
                      className={styles.galleryImage}
                      onClick={() => {
                        setCurrentImageIndex(index);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className={styles.contentWrap}>
            <div className={styles.mainInfo}>
              {/* <h2>{tour?.name} </h2> */}
              {/* <p className={styles.description}>{tour?.description}</p> */}

              {tour?.destinations && tour?.destinations.length > 0 && (
                <div className={styles.destinations}>
                  {tour.destinations.map((dest, i) => (
                    <span key={i} className={styles.destTag}>
                      {dest}
                    </span>
                  ))}
                </div>
              )}

              {detailsHTML && (
                <div className={styles.htmlContentSection}>
                  <div
                    className={styles.htmlContent}
                    dangerouslySetInnerHTML={{ __html: detailsHTML }}
                  />
                </div>
              )}
            </div>

            <div className={styles.bookingCard}>
              <h3>Interested in this tour?</h3>
              <p>
                Contact our experts to get a personalized quote and itinerary
                tailored just for you.
              </p>
              <Link href="/contact" className={styles.bookBtn}>
                Enquire Now
              </Link>

              <div className={styles.itinerarySection}>
                <hr className={styles.divider} />
                <h4>Download Itineraries</h4>

                <Link
                  href={docUrl}
                  download={tour?.name}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.downloadBtn}
                >
                  {tour?.name}.docx
                </Link>
              </div>
            </div>
          </div>

          {tour?.cruiseLogos && tour?.cruiseLogos.length > 0 && (
            <div className={styles.cruiseLogosSection}>
              <h3>Our Cruise Partners</h3>
              <div className={styles.logosGrid}>
                {tour.cruiseLogos.map((logo, index) => (
                  <div key={index} className={styles.logoWrap}>
                    <NextImage
                      src={logo}
                      alt="cruise logo"
                      width={180}
                      height={90}
                      className={styles.cruiseLogo}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {tour?.images && tour?.images.length > 0 && !isGalleryAtTop && (
            <div className={styles.gallerySection}>
              <h2>Image Gallery</h2>
              <div className={styles.galleryGrid}>
                {tour?.images.map((img, index) => (
                  <div key={index} className={styles.galleryImageWrap}>
                    <NextImage
                      src={img}
                      alt={`${tour?.title} photo ${index + 1}`}
                      fill
                      className={styles.galleryImage}
                      onClick={() => {
                        setCurrentImageIndex(index);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </CustomContainer>
      </div>
    </>
  );
};

export default TourDetailsScreen;
