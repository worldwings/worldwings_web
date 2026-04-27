import React from "react";
import BannerSection from "./sections/banner/banner";
import AboutUsSection from "./sections/about_us/about_us";
import ToursSection from "./sections/tours/tours";
import DestinationsSection from "./sections/destinations/destinations";
import WhyChooseUsSection from "./sections/why_choose_us/why_choose_us";
import BlogSection from "./sections/blog/blog";
import TestimonialsSection from "./sections/testimonials/testimonials";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      {/* <AboutUsSection /> */}
      <ToursSection />

      {/* <DestinationsSection /> */}
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default HomeScreen;
