import { Box } from '@chakra-ui/react';
import useAuthState from '../lib/hooks/useAuthState';
import { useNavigate } from 'react-router-dom';
import SignOutButton from '../components/buttons/sign-out-button/SignOutButton';
import { useEffect } from 'react';

const User = () => {
  const [user] = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) {
      navigate('/sign-in');
    }
  }, [user]) 
  
  return (
    <Box
      as="section"
      backgroundColor="gray.700"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <SignOutButton />
    </Box>
  );
};

export default User;
