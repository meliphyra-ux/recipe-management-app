import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import styled from '@emotion/styled';

const StyledOutletBox = styled(Box)`
  & > section {
    height: 100%;
    min-height: calc(100vh - 91px);
  }
`;

const LayoutWrapper = () => {
  return (
    <Box as="div" bg="gray.800" color="whiteAlpha.900" minH="100vh" px="32px">
      <Header />
      <StyledOutletBox>
        <Outlet />
      </StyledOutletBox>
    </Box>
  );
};

export default LayoutWrapper;
