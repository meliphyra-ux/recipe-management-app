import { Box, Heading } from '@chakra-ui/react';

import { BsBookmark } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import NavigationButton from './buttons/NavigationButton';
import useAuthState from '~/lib/hooks/useAuthState';

const Header = () => {
  const [user] = useAuthState()
  return (
    <Box as="header" display="flex" justifyContent="space-between" py="16px">
      <Link to="/">
        <Heading size="xl">Recipe management</Heading>
      </Link>
      <Box as="nav" width="275px" display="flex" justifyContent="space-between">
        <NavigationButton to="/saved" icon={BsBookmark} text="Saved recipes" />
        <NavigationButton to={user ? '/user' : '/sign-in'} icon={BiUser} text={user ? 'User' : 'Sign in'} />
      </Box>
    </Box>
  );
};

export default Header;
