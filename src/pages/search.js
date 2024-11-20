import React, { useState } from 'react';
import { Box, Heading, Input, Button, List, ListItem, Link } from '@chakra-ui/react';
import axios from 'axios';
import Navbar from '@/components/Navbar';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
        const response = await axios.get(`https://api.example.com/geocode?address=${searchTerm}`);
        setResults(response.data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Display an error message to the user
        setError('Failed to fetch data. Please try again later.');
    }
};

  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading>Search for a City</Heading>
        <Input placeholder="Enter city name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button onClick={handleSearch}>Search</Button>   

        {results.length > 0 && (
          <List>
            {results.map((result) => (
              <ListItem key={result.place_id}>
                <Link href={`/cities/${result.place_id}`}>{result.formatted_address}</Link>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
}