// pages/city.js
import Navbar from '../components/Navbar'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function CityPage() {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Heading>City Information</Heading>
        <Text>Here you can find information about a specific city.</Text>
      </Box>
    </>
  )
}
