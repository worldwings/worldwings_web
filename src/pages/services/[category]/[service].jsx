import ServiceDetailsScreen from "@/components/screens/service_details/service_details";
import { SERVICES } from "@/constants/services";

export default function ServicePage({ service }) {
    return <ServiceDetailsScreen service={service} />;
}

export async function getStaticPaths() {
    const paths = SERVICES.map((service) => ({
        params: { 
            category: service.category,
            service: service.id 
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { category, service } = params;
    
    const serviceData = SERVICES.find(s => s.category === category && s.id === service) || null;
    
    if (!serviceData) {
        return { notFound: true };
    }

    return {
        props: {
            service: serviceData,
        },
    };
}
