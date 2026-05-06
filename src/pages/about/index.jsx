import AboutUsScreen from "@/components/screens/about/about";
import SEO from "@/components/common/seo/seo";

const AboutPage = () => {
    return (
        <>
            <SEO title="About Us" description="Learn more about World Wings Tours and Travels and our commitment to making your travel dreams a reality." />
            <AboutUsScreen />
        </>
    );
};

export default AboutPage;