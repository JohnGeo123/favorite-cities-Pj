import React, { useState } from 'react';
import { Box, Heading, Input, Button, List, ListItem, Text } from '@chakra-ui/react';
import axios from 'axios';
import Navbar from '@/components/Navbar';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const API_KEY = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'; // Cheia ta OpenCage API
    const API_URL = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(searchTerm)}&key=${API_KEY}`;

    try {
      setError(null); // Resetăm eroarea la fiecare căutare nouă
      const response = await axios.get(API_URL);

      if (response.data.results && response.data.results.length > 0) {
        const mappedResults = response.data.results.map((result) => ({
          id: result.annotations.geohash || result.components.city || result.formatted,
          formattedName: result.formatted,
          country: result.components.country,
          latitude: result.geometry.lat,
          longitude: result.geometry.lng,
        }));

        setResults(mappedResults);
      } else {
        setResults([]);
        setError('No results found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading>Search for a City</Heading>
        <Input
          placeholder="Enter city name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch} mt={2}>
          Search
        </Button>

        {error && (
          <Text color="red.500" mt={2}>
            {error}
          </Text>
        )}

        {results.length > 0 && (
          <List spacing={3} mt={4}>
            {results.map((result) => (
              <ListItem key={result.id}>
                <Text fontWeight="bold">{result.formattedName}</Text>
                <Text>Country: {result.country}</Text>
                <Text>
                  Coordinates: {result.latitude}, {result.longitude}
                </Text>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
}
