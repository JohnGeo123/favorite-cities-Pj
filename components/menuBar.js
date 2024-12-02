import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';

export default function MenuBar() {
  const menuItemStyles = {
    borderWidth: '1px',
    borderColor: 'gray.200',
    m: '1',
    justifyContent: 'center',
    _hover: {
      bg: 'gray.100',
      color: 'gray.700',
    },
  };

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          size="sm"
          variant="solid"
          colorScheme="gray"
          m="5"
          _hover={{ bg: 'gray.200', color: 'gray.700' }}
        >
          Menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem asChild value="homepage" css={menuItemStyles}>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem asChild value="search-page" css={menuItemStyles}>
          <Link href="/search">Search</Link>
        </MenuItem>
        <MenuItem asChild value="city-page" css={menuItemStyles}>
          <Link href="/city-page">City</Link>
        </MenuItem>
        <MenuItem asChild value="favorites" css={menuItemStyles}>
          <Link href="/favorites">Favorites</Link>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}