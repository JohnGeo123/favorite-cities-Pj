import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar = () => {
  return (
    <Box as="nav" bg="teal.950" p={4}>
      <NextLink href="/" passHref>
        <Link px={2} color="white">Home</Link>
      </NextLink>
      <NextLink href="/search" passHref>
        <Link px={2} color="white">Search</Link>
      </NextLink>
      <NextLink href="/favorites" passHref>
        <Link px={2} color="white">Favorites</Link>
      </NextLink>
    </Box>
  )
}

export default Navbar