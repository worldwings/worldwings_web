import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './TourFilter.module.scss';

const TourFilter = ({ tours, onFilterChange, destination }) => {
  const router = useRouter();
  // Support both 'destinations' array and 'destination' string for backward compatibility
  const getTourDestinations = (t) => t.destinations || (t.destination ? [t.destination] : []);

  const destinations = [...new Set(tours.flatMap(getTourDestinations))];
  const computedMaxDuration = React.useMemo(() => {
    return Math.max(
      ...tours.map(t => {
        const match = t.duration?.match(/(\d+)/);
        return match ? parseInt(match[1], 10) : 0;
      }),
      1
    );
  }, [tours]);

  const [selectedDestinations, setSelectedDestinations] = useState(['Bali']);
  const [maxDuration, setMaxDuration] = useState(computedMaxDuration);
  const [showAllDestinations, setShowAllDestinations] = useState(false);

  console.log('xxx--->>', selectedDestinations);


  // Initialize from query param if present


  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({ destinations: selectedDestinations, maxDuration });
    }
  }, [selectedDestinations, maxDuration]);

  React.useEffect(() => {
    setMaxDuration(computedMaxDuration);
  }, [computedMaxDuration]);

  const handleDestinationChange = (dest) => {
    if (selectedDestinations.includes(dest)) {
      setSelectedDestinations(selectedDestinations.filter(d => d !== dest));
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  const handleDurationChange = (e) => {
    setMaxDuration(parseInt(e.target.value, 10));
  };

  const handleClear = () => {
    setSelectedDestinations([]);
    setMaxDuration(computedMaxDuration);
  };

  useEffect(() => {
    handleClear()
    console.log('1');

    if (router.isReady && router.query.destinations) {
      console.log('2');
      const queryDest = router.query.destinations;
      console.log('3');
      console.log(router.query.destinations);
      if (Array.isArray(queryDest)) {
        console.log('4');
        setSelectedDestinations(queryDest);
      } else {
        console.log('4');
        console.log(queryDest);
        setSelectedDestinations([queryDest]);
      }
    }
  }, [router.isReady, router.query.destinations]);

  const visibleDestinations = showAllDestinations ? destinations : destinations.slice(0, 5);



  return (
    <div className={styles.filterSidebar}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>Filter By</h3>
        <button className={styles.clearBtn} onClick={handleClear}>Clear</button>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader}>
          <h4>Destination</h4>
          <span className={styles.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </span>
        </div>
        <div className={styles.checkboxList}>
          {visibleDestinations.sort((a, b) => a.localeCompare(b)).map(dest => (
            <label key={dest} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedDestinations.includes(dest)}
                onChange={() => handleDestinationChange(dest)}
              />
              <span className={styles.labelTexts}>
                <span className={styles.name}>{dest}</span>
                <span className={styles.count}>{tours.filter(t => getTourDestinations(t).includes(dest)).length}</span>
              </span>
            </label>
          ))}
          {destinations.length > 5 && (
            <button className={styles.showMore} onClick={() => setShowAllDestinations(!showAllDestinations)}>
              {showAllDestinations ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader}>
          <h4>Duration</h4>
          <span className={styles.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </span>
        </div>
        <div className={styles.sliderContainer}>
          <input type="range" min="0" max={computedMaxDuration} value={maxDuration} onChange={handleDurationChange} className={styles.slider} />
          <div className={styles.sliderLabels}>
            <span>0 Days</span>
            <span>{maxDuration} Days</span>
          </div>
        </div>
      </div>

      {/* <div className={styles.filterSection}>
        <div className={styles.sectionHeader}>
          <h4>Activities</h4>
          <span className={styles.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </span>
        </div>
        <div className={styles.checkboxList}>
          {['Beach & Water Sports', 'Cultural Experiences', 'Hiking & Trekking'].map((act, index) => (
            <label key={act} className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span className={styles.labelTexts}>
                <span className={styles.name}>{act}</span>
                <span className={styles.count}>{index + 2}</span>
              </span>
            </label>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default TourFilter;
