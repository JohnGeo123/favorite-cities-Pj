// pages/favorites.js
import Navbar from '../components/Navbar'
import { Box, Heading } from '@chakra-ui/react'

export default function Favorites() {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading>Your Favorite Cities</Heading>
      </Box>
    </>
  )
}
