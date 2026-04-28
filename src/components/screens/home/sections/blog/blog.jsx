import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { BLOG_POSTS } from '@/constants/constants';
import styles from './blog.module.scss';
import CustomContainer from '@/components/ui/custom_container/custom_container'; // assuming this exists since it is used in Header
import SectionHeading from '@/components/common/section_heading/section_heading';

const BlogSection = () => {
    return (
        <section className={styles.blogSection}>
            <CustomContainer>
                <SectionHeading
                    head="Travel Stories & Guides"
                    caption="Read exciting travel stories, expert guides, and helpful tips."
                    title="Our Blog"
                    noAnimation
                />

                <Row className={styles.cardsRow}>
                    {BLOG_POSTS.map((post, idx) => (
                        <Col lg={4} md={6} sm={12} key={post.id} className={styles.cardCol}>
                            <Link href={post.href} className={styles.blogCard}
                                // data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div
                                    className={styles.cardImageBg}
                                    style={{
                                        // Fallback to random images like destination if these don't exist
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
                        </Col>
                    ))}
                </Row>
            </CustomContainer>
        </section>
    );
};

export default BlogSection;
