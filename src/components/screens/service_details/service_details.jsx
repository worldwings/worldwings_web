import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./service_details.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageBanner from "@/components/common/page_banner/page_banner";
import { CheckCircleFill } from "react-bootstrap-icons";

const ServiceDetailsScreen = ({ service }) => {
    if (!service) {
        return (
            <div className={styles.notFound}>
                <CustomContainer>
                    <h1>Service Not Found</h1>
                    <Link href="/" className={styles.btn}>Return to Home</Link>
                </CustomContainer>
            </div>
        );
    }

    const coverImage = service.images && service.images.length > 0
        ? `/${service.folderName}/${service.images[0]}`
        : "/blog/blog-1.jpg";

    return (
        <>
            <Head>
                <title>{service.title} - World Wings</title>
                <meta name="description" content={service.description} />
            </Head>

            <div className={styles.detailsPage}>
                <PageBanner title={service.title} image={coverImage} />

                <CustomContainer>
                    <div className={styles.contentWrap}>
                        <div className={styles.mainInfo}>
                            <h2>About {service.title}</h2>
                            <p className={styles.description}>{service.description}</p>

                            {service.highlights && service.highlights.length > 0 && (
                                <div className={styles.highlights}>
                                    <h3>Highlights</h3>
                                    <ul>
                                        {service.highlights.map((hlt, idx) => (
                                            <li key={idx}><CheckCircleFill /> {hlt}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.overviewHtml && (
                                <div className={styles.htmlContentSection}>
                                    <h3>Overview</h3>
                                    <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: service.overviewHtml }} />
                                </div>
                            )}
                        </div>

                        <div className={styles.bookingCard}>
                            <h3>Need this service?</h3>
                            <p>Contact our experts to get personalized assistance for your specific requirements.</p>
                            <Link href="/contact" className={styles.bookBtn}>
                                Enquire Now
                            </Link>
                        </div>
                    </div>

                    {service.images && service.images.length > 1 && (
                        <div className={styles.gallerySection}>
                            <h2>Gallery</h2>
                            <div className={styles.galleryGrid}>
                                {service.images.map((img, index) => (
                                    <div key={index} className={styles.galleryImageWrap}>
                                        <Image
                                            src={`/${service.folderName}/${img}`}
                                            alt={`${service.title} photo ${index + 1}`}
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

export default ServiceDetailsScreen;
