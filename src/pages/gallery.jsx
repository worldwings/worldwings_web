import GalleryScreen from "@/components/screens/gallery/gallery";
import SEO from "@/components/common/seo/seo";

export default function GalleryPage() {
    return (
        <>
            <SEO title="Gallery" description="Explore our gallery of past tours, beautiful destinations, and memorable travel experiences." />
            <GalleryScreen />
        </>
    );
}
