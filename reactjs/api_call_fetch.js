import React, { useState, useEffect } from 'react';

const ApiCallComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an API call using fetch
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();

        // Update state with the fetched data
        setData(result);
      } catch (error) {
        // Handle errors
        setError(error);
      } finally {
        // Update loading state
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>Data from API:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiCallComponent;
