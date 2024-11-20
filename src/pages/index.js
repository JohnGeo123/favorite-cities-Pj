import Navbar from "@/components/Navbar";
import { Box, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Box textAlign="center" mt={5}>
      <Heading>Welcome to the Favorite Cities App</Heading>
      
    </Box>
    </>
  );
};

export default Home;
