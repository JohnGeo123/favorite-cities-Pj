// pages/search.js
import Navbar from '../components/Navbar'
import { Box, Heading } from '@chakra-ui/react'

export default function Search() {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading>Search for a City</Heading>
      </Box>
    </>
  )
}
