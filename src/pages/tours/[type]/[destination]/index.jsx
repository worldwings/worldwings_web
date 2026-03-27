import { useRouter } from "next/router";
import ToursListScreen from "@/components/screens/tours/toursList";
import { TOUR_PACKAGES } from "@/constants/tours";
import { useMemo } from "react";

const ToursPage = () => {
    const router = useRouter();
    const { type, destination } = router.query;

    const filteredTours = useMemo(() => {
        if (!type || !destination) return [];

        return TOUR_PACKAGES.filter((tour) => {
            return tour.type === type && tour.destination === destination;
        });
    }, [type, destination]);

    return <ToursListScreen tours={filteredTours} destination={destination} />;
};

export default ToursPage;
