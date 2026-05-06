import ServiceDetailsScreen from "@/components/screens/service_details/service_details";
import SEO from "@/components/common/seo/seo";
import { SERVICES } from "@/constants/services";
import mammoth from "mammoth";
import fs from "fs";
import path from "path";

export default function VisasPage({ service }) {
    return (
        <>
            <SEO title={service?.title || "Visa Services"} description={`Apply for visas with our hassle-free visa assistance. ${service?.title}`} />
            <ServiceDetailsScreen service={service} />
        </>
    );
}

export async function getServerSideProps() {
    // 1. Find the Visa Services metadata
    const serviceData = SERVICES.find(s => s.id === "visa-services") || null;
    
    if (!serviceData) {
        return { notFound: true };
    }

    // 2. Load and parse the DOCX file
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
            console.error("MAMMOTH ERROR (Visas):", err);
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
