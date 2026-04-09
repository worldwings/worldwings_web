/* eslint-disable @next/next/no-assign-module-variable */
import { useRouter } from "next/router";
import ToursListScreen from "@/components/screens/tours/toursList";
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

  return (
    <ToursListScreen
      tours={filteredTours}
      destination={destination}
      type={type}
    />
  );
};

export default ToursPage;
