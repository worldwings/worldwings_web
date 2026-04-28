import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PageBanner from '@/components/common/page_banner/page_banner';
import styles from './blog_details.module.scss';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import { BLOG_POSTS } from '@/constants/constants';

const BlogDetailsScreen = ({ id, detailsHTML }) => {
    const post = BLOG_POSTS.find(p => p.id === id);

    if (!post) return <div>Post not found</div>;

    return (
        <div className={styles.blogDetails}>
            <PageBanner 
                title={post.title}
                image={post.image}
                label="Travel Blog"
                subtitle={`By ${post.author} • ${post.tags.join(', ')}`}
            />

            <CustomContainer className="py-5">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className={styles.contentWrapper}>
                            <div className={styles.metaInfo}>
                                <span className={styles.date}>April 28, 2026</span>
                                <span className={styles.separator}>|</span>
                                <span className={styles.author}>{post.author}</span>
                            </div>

                            <div className={styles.content}>
                                {detailsHTML ? (
                                    <div 
                                        dangerouslySetInnerHTML={{ __html: detailsHTML }} 
                                        className={styles.blogBody}
                                    />
                                ) : (
                                    <p>Loading content...</p>
                                )}
                            </div>

                            <div className={styles.tags}>
                                <strong>Tags:</strong>
                                {post.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </CustomContainer>
        </div>
    );
};

export default BlogDetailsScreen;
