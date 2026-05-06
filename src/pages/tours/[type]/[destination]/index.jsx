/* eslint-disable @next/next/no-assign-module-variable */
import { useRouter } from "next/router";
import ToursListScreen from "@/components/screens/tours/toursList";
import SEO from "@/components/common/seo/seo";
import { useEffect, useState } from "react";

const ToursPage = () => {
  const router = useRouter();
  const { type, destination } = router.query;

  const [filteredTours, setFilteredTours] = useState([]);

  const loadTours = async () => {
    try {
      const res = await fetch(
        `/tours/${type}/${destination}/${destination}.json`,
      );

      const data = await res.json();

      setFilteredTours(data);

      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    loadTours();
  }, [router.isReady, router.query.destination, type, destination]);

  const formattedDestination = destination ? destination.toString().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Destination";

  return (
    <>
      <SEO 
        title={`${formattedDestination} Tours`} 
        description={`Discover amazing tour packages to ${formattedDestination} with World Wings.`} 
      />
      <ToursListScreen
        tours={filteredTours}
        destination={destination}
        type={type}
      />
    </>
  );
};

export default ToursPage;
