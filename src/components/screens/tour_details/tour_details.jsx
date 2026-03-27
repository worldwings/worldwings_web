import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./tour_details.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageBanner from "@/components/common/page_banner/page_banner";
import { CheckCircleFill } from "react-bootstrap-icons";

const TourDetailsScreen = ({ tour }) => {
    if (!tour) {
        return (
            <div className={styles.notFound}>
                <CustomContainer>
                    <h1>Tour Package Not Found</h1>
                    <Link href="/" className={styles.btn}>Return to Home</Link>
                </CustomContainer>
            </div>
        );
    }

    const coverImage = tour.images && tour.images.length > 0
        ? `/destinations/${tour.folderName}/${tour.images[0]}`
        : "/blog/blog-1.jpg";

    return (
        <>
            <Head>
                <title>{tour.title} - World Wings</title>
                <meta name="description" content={tour.description} />
            </Head>

            <div className={styles.detailsPage}>
                <PageBanner title={tour.title} image={coverImage} />

                <CustomContainer>
                    <div className={styles.contentWrap}>
                        <div className={styles.mainInfo}>
                            <h2>About {tour.title}</h2>
                            <p className={styles.description}>{tour.description}</p>

                            <div className={styles.highlights}>
                                <h3>Highlights</h3>
                                <ul>
                                    <li><CheckCircleFill /> Accommodation & Transfers Included</li>
                                    <li><CheckCircleFill /> Expert Local Guides</li>
                                    <li><CheckCircleFill /> Customized Itinerary Options</li>
                                    <li><CheckCircleFill /> Premium 24/7 Support</li>
                                </ul>
                            </div>

                            {tour.itineraryHtml && (
                                <div className={styles.htmlContentSection}>
                                    <h3>Detailed Itinerary</h3>
                                    <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: tour.itineraryHtml }} />
                                </div>
                            )}
                        </div>

                        <div className={styles.bookingCard}>
                            <h3>Interested in this tour?</h3>
                            <p>Contact our experts to get a personalized quote and itinerary tailored just for you.</p>
                            <Link href="/contact" className={styles.bookBtn}>
                                Enquire Now
                            </Link>

                            {tour.itineraries && tour.itineraries.length > 0 && (
                                <div className={styles.itinerarySection}>
                                    <hr className={styles.divider} />
                                    <h4>Download Itineraries</h4>
                                    {tour.itineraries.map((itinerary, idx) => {
                                        const parts = itinerary.split('/');
                                        const fileName = parts[parts.length - 1];
                                        return (
                                            <a
                                                key={idx}
                                                href={`/ITINERARIES/${itinerary}`}
                                                download={fileName}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={styles.downloadBtn}
                                            >
                                                📄 {fileName.replace(/\.[^/.]+$/, "")}
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {tour.images && tour.images.length > 0 && (
                        <div className={styles.gallerySection}>
                            <h2>Image Gallery</h2>
                            <div className={styles.galleryGrid}>
                                {tour.images.map((img, index) => (
                                    <div key={index} className={styles.galleryImageWrap}>
                                        <Image
                                            src={`/destinations/${tour.folderName}/${img}`}
                                            alt={`${tour.title} photo ${index + 1}`}
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
