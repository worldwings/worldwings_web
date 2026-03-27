import PageBanner from "@/components/common/page_banner/page_banner";
import AboutUsSection from "../home/sections/about_us/about_us";
import TestimonialsSection from "../home/sections/testimonials/testimonials";
import WhyChooseUsSection from "../home/sections/why_choose_us/why_choose_us";
import OurStorySection from "./sections/our_story/our_story";
import OurTeamSection from "./sections/our_team/our_team";

const AboutUsScreen = () => {
    return (
        <>
            <PageBanner title="About Us" image="/images/about_banner.webp" />

            <OurStorySection />
            {/* <AboutUsSection /> */}
            <WhyChooseUsSection />
            <OurTeamSection />
            <TestimonialsSection />
        </>
    );
};

export default AboutUsScreen;