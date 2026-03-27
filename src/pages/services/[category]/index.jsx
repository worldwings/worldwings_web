import ServicesListScreen from "@/components/screens/services_list/servicesList";
import { SERVICES } from "@/constants/services";

export default function ServicesCategoryPage({ services, category }) {
    return <ServicesListScreen services={services} category={category} />;
}

export async function getStaticPaths() {
    const categories = [...new Set(SERVICES.map(service => service.category))];
    
    const paths = categories.map((category) => ({
        params: { category },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { category } = params;
    
    const categoryServices = SERVICES.filter(service => service.category === category);
    
    return {
        props: {
            services: categoryServices,
            category: category,
        },
    };
}
