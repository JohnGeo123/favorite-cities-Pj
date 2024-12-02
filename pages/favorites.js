import {
  Container,
  Heading,
  Text,
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import MenuBar from "@/components/menuBar";

export default function Favorites() {
  return (
    <>
      <MenuBar />
      <Container maxW="container.xl" p={8} centerContent>
        <Flex direction="column" align="center">
          <Heading as="h1" size="3xl" mb={6}>
            Favorites Page
          </Heading>
          <Box
            bg={useColorModeValue("purple.500", "purple.700")}
            color="white"
            p={4}
            borderRadius="md"
          >
            This is the favorites page
          </Box>
        </Flex>
      </Container>
    </>
  );
}