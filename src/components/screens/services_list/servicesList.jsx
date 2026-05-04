import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./servicesList.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageBanner from "@/components/common/page_banner/page_banner";

const ServicesListScreen = ({ services, category }) => {
  const formatTitle = (slug) => {
    if (!slug) return "Services";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = formatTitle(category);

  

  const getHeaderimage = () => {
 
    return services.length > 0 && services[0].images?.length > 0
      ? `/${services[0].folderName}/${services[0].images[0]}`
      : "/blog/blog-1.jpg";
  };

  return (
    <>
      <Head>
        <title>{title} - World Wings</title>
        <meta
          name="description"
          content={`Explore our premium ${title} services.`}
        />
      </Head>
      <div className={styles.servicesPage}>
        <PageBanner title={title} image={getHeaderimage()} />

        <CustomContainer>
          <div className={styles.servicesGrid}>
            {services.length > 0 ? (
              services.map((service) => (
                <div className={styles.serviceCard} key={service.id}>
                  <div className={styles.imageWrap}>
                    {service.images && service.images.length > 0 ? (
                      <Image
                        src={`/${service.folderName}/${service.images[0]}`}
                        alt={service.title}
                        width={400}
                        height={250}
                        className={styles.image}
                      />
                    ) : (
                      <div className={styles.placeholderImage}>No Image</div>
                    )}
                  </div>
                  <div className={styles.content}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link
                      href={`/services/${category}/${service.id}`}
                      className={styles.btn}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noServices}>
                <p>No services found for this category at the moment.</p>
              </div>
            )}
          </div>
        </CustomContainer>
      </div>
    </>
  );
};

export default ServicesListScreen;
