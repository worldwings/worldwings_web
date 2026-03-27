import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import PageBanner from '@/components/common/page_banner/page_banner';
import { TOUR_PACKAGES } from '@/constants/tours';
import styles from './gallery.module.scss';

const GalleryScreen = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    // Flatten all images from tours
    const { galleryItems, categories } = useMemo(() => {
        const items = [];
        const cats = new Set(['All']);

        TOUR_PACKAGES.forEach((tour) => {
            if (tour.images && tour.images.length > 0) {
                cats.add(tour.title);
                tour.images.forEach((img, idx) => {
                    items.push({
                        id: `${tour.id}-${idx}`,
                        tourTitle: tour.title,
                        folderName: tour.folderName,
                        imageName: img,
                        imageUrl: `/destinations/${tour.folderName}/${img}`
                    });
                });
            }
        });

        return {
            galleryItems: items,
            categories: Array.from(cats)
        };
    }, []);

    // Filter images
    const filteredImages = useMemo(() => {
        if (activeFilter === 'All') return galleryItems;
        return galleryItems.filter(item => item.tourTitle === activeFilter);
    }, [activeFilter, galleryItems]);

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
        if (currentIndex > 0) {
            setSelectedImage(filteredImages[currentIndex - 1]);
        } else {
            setSelectedImage(filteredImages[filteredImages.length - 1]);
        }
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);
        if (currentIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentIndex + 1]);
        } else {
            setSelectedImage(filteredImages[0]);
        }
    };

    return (
        <>
            <Head>
                <title>Gallery - World Wings</title>
                <meta name="description" content="View our stunning collection of tour destinations." />
            </Head>

            <PageBanner title="Gallery" image="/blog/blog-1.jpg" />

            <div className={styles.galleryPage}>
                <CustomContainer>
                    {/* Filters */}
                    <div className={styles.filterContainer}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className={styles.galleryGrid}>
                        {filteredImages.map((item) => (
                            <div key={item.id} className={styles.galleryItem}>
                                <div className={styles.imageWrap} onClick={() => setSelectedImage(item)} style={{ cursor: 'pointer' }}>
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.tourTitle}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className={styles.overlay}>
                                        <div className={styles.overlayContent}>
                                            <ZoomIn className={styles.icon} />
                                            <h4>{item.tourTitle}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CustomContainer>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className={styles.lightboxOverlay} onClick={() => setSelectedImage(null)}>
                    <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                        <X />
                    </button>
                    
                    <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev}>
                        <ChevronLeft />
                    </button>
                    
                    <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext}>
                        <ChevronRight />
                    </button>

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage.imageUrl}
                            alt={selectedImage.tourTitle}
                            fill
                            className={styles.lightboxImage}
                            sizes="100vw"
                        />
                        <div className={styles.lightboxCaption}>
                            {selectedImage.tourTitle}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryScreen;
