import ServiceDetailsScreen from "@/components/screens/service_details/service_details";
import SEO from "@/components/common/seo/seo";
import { SERVICES } from "@/constants/services";
import mammoth from "mammoth";
import fs from "fs";
import path from "path";

export default function ServicePage({ service }) {
    return (
        <>
            <SEO 
                title={service?.title || "Service Details"} 
                description={`Explore our ${service?.title || "service"} offerings at World Wings.`} 
                ogImage={service?.image}
            />
            <ServiceDetailsScreen service={service} />
        </>
    );
}

export async function getServerSideProps({ params }) {
    const { category, service: serviceId } = params;
    
    // 1. Find the service metadata
    const serviceData = SERVICES.find(s => s.category === category && s.id === serviceId) || null;
    
    if (!serviceData) {
        return { notFound: true };
    }

    // 2. Load and parse the DOCX file if docxPath exists
    let overviewHtml = "";
    if (serviceData.docxPath) {
        try {
            const docPath = path.join(process.cwd(), "public", "services", serviceData.docxPath);
            if (fs.existsSync(docPath)) {
                const buffer = fs.readFileSync(docPath);
                const result = await mammoth.convertToHtml({ buffer });
                overviewHtml = result.value;
            } else {
                console.warn("DOCX not found:", docPath);
            }
        } catch (err) {
            console.error("MAMMOTH ERROR (Services):", err);
        }
    }

    return {
        props: {
            service: {
                ...serviceData,
                overviewHtml
            },
        },
    };
}
