import { useParams, useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

function CityPage() {
  const { cityId } = useParams();
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityId}&key=YOUR_API_KEY`);
        const data = await response.json();
        setCityData(data.results[0]); // Assuming the first result is the correct one
      } catch (error) {
        setError('Error fetching city data');
      }
    };

    fetchCityData();
  }, [cityId]);

  return (
    <>
      <Navbar />
      <Box p={4}>
        {error ? (
          <Text>Error: {error}</Text>
        ) : (
          <>
            <Heading>{cityData?.name}</Heading>
            <Text>Population: {cityData?.population}</Text>
            {/* ... other city details */}
            {/* Weather information can be fetched and displayed here */}
          </>
        )}
      </Box>
    </>
  );
}

export default CityPage;