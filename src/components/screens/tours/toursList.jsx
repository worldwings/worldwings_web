import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./toursList.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageBanner from "@/components/common/page_banner/page_banner";
import React, { useState } from "react";
import TourFilter from "./components/TourFilter";
import TourTopBar from "./components/TourTopBar";
import { Offcanvas } from "react-bootstrap";

const ToursListScreen = ({ tours = [], destination, type }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterState, setFilterState] = useState({ destinations: [] });
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleCloseMobileFilter = () => setShowMobileFilter(false);
  const handleShowMobileFilter = () => setShowMobileFilter(true);

  // Format destination title from slug (e.g. north-india -> North India)
  const formatTitle = (slug) => {
    if (!slug) return "Tours";
    return slug
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = formatTitle(destination);

  const filteredTours = tours.filter((tour) => {
    // Search filter
    const matchesSearch =
      tour.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description?.toLowerCase().includes(searchQuery.toLowerCase());

    // Destination filter
    const matchesDestination =
      filterState.destinations.length === 0 ||
      (tour.destinations
        ? tour.destinations.some((d) => filterState.destinations.includes(d))
        : filterState.destinations.includes(tour.destination));

    // Duration filter
    const matchesDuration =
      filterState.maxDuration === undefined ||
      (() => {
        const durationMatch = tour.duration?.match(/(\d+)/);
        if (!durationMatch) return true;
        const tourDuration = parseInt(durationMatch[1], 10);
        return tourDuration <= filterState.maxDuration;
      })();

    return matchesSearch && matchesDestination && matchesDuration;
  });

  const headerImages = {
    australia_and_newzealand:
      "/images/header_images/australia_and_newzealand.jpg",
    usa_and_canada: "/images/header_images/usa_and_canada.jpg",
    europe: "/images/header_images/europe.jpg",
    middle_east: "/images/header_images/middle_east.jpg",
    africa: "/images/header_images/africa.jpg",
    asia: "/images/header_images/asia.jpg",
    east_and_west_india: "/images/header_images/east_and_west_india.jpg",
    north_india: "/images/header_images/north_india.jpg",
    south_india: "/images/header_images/south_india.png",
    weekend_getaway: "/images/header_images/weekend_getaway.jpg",
  };

  
  

  const getHeaderimage = () => {

    if(headerImages[destination]){
      return headerImages[destination]
    }

    return tours?.length > 0 && tours[0]?.images?.length > 0
      && tours[0]?.bannerImg || tours[0]?.images[0]
      
  };

  const bannerData = {
    title: title,
    label: "",
    image: getHeaderimage(),
  };

  

  return (
    <>
      <Head>
        <title>{bannerData.title} - World Wings</title>
        <meta
          name="description"
          content={`Explore our premium ${bannerData.title} tour packages and create unforgettable memories.`}
        />
      </Head>
      <div className={styles.toursPage}>
        <PageBanner
          title={bannerData.title}
          label={bannerData.label}
          saveText={bannerData.saveText}
          subtitle={bannerData.subtitle}
          buttonText={bannerData.buttonText}
          image={getHeaderimage()}
          videoSrc={bannerData.videoSrc}
        />

        <CustomContainer>
          <div className={styles.toursLayout}>
            <aside className={styles.sidebar}>
              <TourFilter
                tours={tours}
                onFilterChange={setFilterState}
                destination={destination}
              />
            </aside>
            <main className={styles.mainContent}>
              <TourTopBar
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                right={
                  <div className={styles.mobileFilterToggle}>
                    <button
                      className={styles.applyFilterBtn}
                      onClick={handleShowMobileFilter}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                      </svg>
                      Apply Filters
                    </button>
                  </div>
                }
              />
              <div className={styles.toursGrid}>
                {filteredTours.length > 0 ? (
                  filteredTours.map((tour) => (
                    <div className={styles.tourCard} key={tour.name}>
                      <div className={styles.imageWrap}>
                        {tour.images && tour.images.length > 0 ? (
                          <Image
                            src={`${tour.images[0]}`}
                            alt={tour.title || tour.name}
                            width={400}
                            height={250}
                            className={styles.image}
                          />
                        ) : (
                          <div className={styles.placeholderImage}>
                            No Image
                          </div>
                        )}
                      </div>
                      <div className={styles.content}>
                        <h3>{tour.name}</h3>
                        <p>{tour.description}</p>
                        <div>
                          <p>
                            <span>Duration:</span>
                            <br /> {tour.duration}
                          </p>
                          <p>
                            <span>Price:</span>
                            <br /> {tour.price}
                          </p>
                        </div>
                        {tour.destinations && tour.destinations.length > 0 && (
                          <div className={styles.destinations}>
                            {tour.destinations.map((dest, i) => (
                              <span key={i} className={styles.destTag}>
                                {dest}
                              </span>
                            ))}
                          </div>
                        )}
                        <Link
                          href={`/tours/${type}/${destination}/${tour.name}`}
                          className={styles.btn}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={styles.noTours}>
                    <p>No tours found matching your filters.</p>
                  </div>
                )}
              </div>
            </main>
          </div>

          <Offcanvas
            show={showMobileFilter}
            onHide={handleCloseMobileFilter}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <TourFilter
                tours={tours}
                onFilterChange={setFilterState}
                destination={destination}
              />
            </Offcanvas.Body>
          </Offcanvas>
        </CustomContainer>
      </div>
    </>
  );
};

export default ToursListScreen;
