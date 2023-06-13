import { Box, Heading } from '@chakra-ui/react';

import { BsBookmark } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import NavigationButton from '../buttons/navigation-button/NavigationButton';

const Header = () => {
  return (
    <Box as="header" display="flex" justifyContent="space-between" py="16px">
      <Link to="/">
        <Heading size="xl">Recipe management</Heading>
      </Link>
      <Box as="nav" width="250px" display="flex" justifyContent="space-between">
        <NavigationButton to="/saved" icon={BsBookmark} text="Saved recipes" />
        <NavigationButton to="/user" icon={BiUser} text="User" />
      </Box>
    </Box>
  );
};

export default Header;
