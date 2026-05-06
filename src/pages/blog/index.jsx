import React from 'react';
import SEO from '@/components/common/seo/seo';
import PageBanner from '@/components/common/page_banner/page_banner';
import BlogSection from '@/components/screens/home/sections/blog/blog';

const BlogListingPage = () => {
    return (
        <>
            <SEO title="Travel Stories & Guides" description="Read exciting travel stories, expert guides, and helpful tips from World Wings." />
            <PageBanner 
                title="Our Blog"
                image="/images/header_images/blog.jpg"
                label="Travel Stories"
                subtitle="Read exciting travel stories, expert guides, and helpful tips."
            />
            <BlogSection />
        </>
    );
};

export default BlogListingPage;
