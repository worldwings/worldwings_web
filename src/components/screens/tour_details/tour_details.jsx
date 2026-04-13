import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./tour_details.module.scss";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/page_banner/page_banner";

const TourDetailsScreen = ({ tour = {}, detailsHTML, parsedData, docUrl }) => {
  const json = parsedData || {};
  const coverImage = "/images/about_banner.webp";

  return (
    <>
      <div className={styles.detailsPage}>
        <PageBanner title={tour?.name} image={coverImage} />

        <CustomContainer>
          <div className={styles.contentWrap}>
            <div className={styles.mainInfo}>
              <h2>{tour?.name}</h2>
              <p className={styles.description}>{tour?.description}</p>

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

          {tour?.images && tour?.images.length > 0 && (
            <div className={styles.gallerySection}>
              <h2>Image Gallery</h2>
              <div className={styles.galleryGrid}>
                {tour?.images.map((img, index) => (
                  <div key={index} className={styles.galleryImageWrap}>
                    <Image
                      src={`/destinations/${tour?.folderName}/${img}`}
                      alt={`${tour?.title} photo ${index + 1}`}
                      fill
                      className={styles.galleryImage}
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
