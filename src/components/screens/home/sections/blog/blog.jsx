import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/constants/constants';
import styles from './blog.module.scss';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import SectionHeading from '@/components/common/section_heading/section_heading';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const BlogSection = () => {
    const responsiveSettings = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    return (
        <section className={styles.blogSection}>
            <CustomContainer>
                <SectionHeading
                    head="Travel Stories & Guides"
                    caption="Read exciting travel stories, expert guides, and helpful tips."
                    title="Our Blog"
                    noAnimation
                />

                <div className={styles.sliderCont}>
                    <Slide
                        slidesToScroll={1}
                        slidesToShow={3}
                        indicators={false}
                        responsive={responsiveSettings}
                        arrows={true}
                        duration={3000}
                        transitionDuration={300}

                    >
                        {BLOG_POSTS.map((post, idx) => (
                            <div key={post.id} className={styles.cardWrapper}>
                                <Link href={post.href} className={styles.blogCard}>
                                    <div
                                        className={styles.cardImageBg}
                                        style={{
                                            backgroundImage: `url('${post.image}'), url('/destinations/Bali/Bali (1).jpg')`
                                        }}
                                    >
                                        <div className={styles.cardOverlay}>
                                            <h3 className={`${styles.cardTitle} ${post.highlightTitle ? styles.highlighted : ''}`}>
                                                {post.title}
                                            </h3>

                                            <div className={styles.cardMeta}>
                                                <span className={styles.authorTag}>
                                                    <span className={styles.byText}>By</span> {post.author}
                                                </span>
                                                <span className={styles.categoryTag}>
                                                    {post.tags.join(', ')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slide>
                </div>
            </CustomContainer>
        </section>
    );
};

export default BlogSection;
