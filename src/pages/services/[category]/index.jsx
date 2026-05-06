import ServicesListScreen from "@/components/screens/services_list/servicesList";
import SEO from "@/components/common/seo/seo";
import { SERVICES } from "@/constants/services";

export default function ServicesCategoryPage({ services, category }) {
    const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ') : "Services";
    return (
        <>
            <SEO title={`${formattedCategory} Services`} description={`Explore our ${formattedCategory} services provided by World Wings.`} />
            <ServicesListScreen services={services} category={category} />
        </>
    );
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
