import { useRouter } from "next/router";
import TourDetailsScreen from "@/components/screens/tour_details/tour_details";
import { TOUR_PACKAGES } from "@/constants/tours";
import { useMemo } from "react";

const TourDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // const tour = useMemo(() => {
    //     if (!id) return null;
    //     return TOUR_PACKAGES.find((t) => t.id === id);
    // }, [id]);
    const tour = TOUR_PACKAGES.find((t) => t.id === id)

    return <TourDetailsScreen tour={tour} />;
};

export default TourDetailsPage;
