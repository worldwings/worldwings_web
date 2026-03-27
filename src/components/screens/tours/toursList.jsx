import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./toursList.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageBanner from "@/components/common/page_banner/page_banner";

const ToursListScreen = ({ tours, destination }) => {
    // Format destination title from slug (e.g. north-india -> North India)
    const formatTitle = (slug) => {
        if (!slug) return "Tours";
        return slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const title = formatTitle(destination);

    return (
        <>
            <Head>
                <title>{title} Tours - World Wings</title>
                <meta name="description" content={`Explore our premium ${title} tour packages and create unforgettable memories.`} />
            </Head>
            <div className={styles.toursPage}>
                <PageBanner
                    title={`${title}`}
                    image={tours.length > 0 && tours[0].images?.length > 0 ? `/destinations/${tours[0].folderName}/${tours[0].images[0]}` : "/blog/blog-1.jpg"}
                />

                <CustomContainer >
                    <div className={styles.toursGrid}>
                        {tours.length > 0 ? (
                            tours.map((tour) => (
                                <div className={styles.tourCard} key={tour.id}>
                                    <div className={styles.imageWrap}>
                                        {tour.images && tour.images.length > 0 ? (
                                            <Image
                                                src={`/destinations/${tour.folderName}/${tour.images[0]}`}
                                                alt={tour.title}
                                                width={400}
                                                height={250}
                                                className={styles.image}
                                            />
                                        ) : (
                                            <div className={styles.placeholderImage}>No Image</div>
                                        )}
                                    </div>
                                    <div className={styles.content}>
                                        <h3>{tour.title}</h3>
                                        <p>{tour.description}</p>
                                        <Link href={`/tours/${tour.type}/${tour.destination}/${tour.id}`} className={styles.btn}>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.noTours}>
                                <p>No tours found for this destination at the moment.</p>
                            </div>
                        )}
                    </div>
                </CustomContainer>
            </div>
        </>
    );
};

export default ToursListScreen;
