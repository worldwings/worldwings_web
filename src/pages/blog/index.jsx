import React from 'react';
import Head from 'next/head';
import PageBanner from '@/components/common/page_banner/page_banner';
import BlogSection from '@/components/screens/home/sections/blog/blog';

const BlogListingPage = () => {
    return (
        <>
            <Head>
                <title>Travel Stories & Guides | World Wings</title>
                <meta name="description" content="Read exciting travel stories, expert guides, and helpful tips from World Wings." />
            </Head>
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
