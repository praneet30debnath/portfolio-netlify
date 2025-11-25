import { useEffect, useState, useRef } from 'react';
import './VisitorCounter.css';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const hasIncremented = useRef(false);

  useEffect(() => {
    const incrementVisitor = async () => {
      if (hasIncremented.current) return;
      hasIncremented.current = true;

      try {
        const response = await fetch('https://web-production-2cac.up.railway.app/api/visitor/increment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to increment visitor count');
        }

        const data = await response.json();
        setVisitorCount(data.count);
        setLoading(false);
      } catch (err) {
        console.error('Error incrementing visitor count:', err);
        setError(true);
        setLoading(false);
      }
    };

    incrementVisitor();
  }, []);

  // Don't render anything if there's an error
  if (error) {
    return null;
  }

  // Format number with commas
  const formatNumber = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="visitor-counter">
      <svg
        className="visitor-counter__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
      <span className="visitor-counter__text">
        {loading ? (
          <span className="visitor-counter__loading">Loading...</span>
        ) : (
          <>
            <span className="visitor-counter__count">{formatNumber(visitorCount)}</span>
            <span className="visitor-counter__label"> visits to my portfolio. Welcome!</span>
          </>
        )}
      </span>
    </div>
  );
};

export default VisitorCounter;
