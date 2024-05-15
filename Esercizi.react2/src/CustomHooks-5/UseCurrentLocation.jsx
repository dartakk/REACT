import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setLoading(false);
      },
      err => {
        setError(err.message);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []); 

  return { location, error, loading, getCurrentLocation };
};

export default useCurrentLocation;
