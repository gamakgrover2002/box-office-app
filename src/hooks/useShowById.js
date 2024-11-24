import { useState, useEffect } from 'react';
import { getShowData } from '../api/tvmaze';
export const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getShowData(showId);
        setShowData(result);
      } catch (err) {
        setShowError(err.message);
      }
    };
    fetchData();
  }, [showId]);

  return { showData, showError };
};
