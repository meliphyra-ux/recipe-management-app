import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const LayoutWrapper = () => {
  return (
    <Box as="div" bg="gray.800" color="whiteAlpha.900" minH='100vh' px='32px'>
      <Header />
      <Outlet />
    </Box>
  );
};

export default LayoutWrapper;
