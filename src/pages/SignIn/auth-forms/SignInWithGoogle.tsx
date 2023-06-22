import { useNavigate } from 'react-router-dom';

import { signInUserWithGooglePopup } from '../../../lib/firebase';

import { Box, Button, Heading, useToast } from '@chakra-ui/react';

const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const handleOnClick = async () => {
    const isSuccess = await signInUserWithGooglePopup();
    isSuccess
      ? navigate('/user')
      : toast({
          title: 'Something went wrong',
          description: "Try again",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
  };
  return (
    <Box>
      <Heading size="lg">Sign in with Google</Heading>
      <Button colorScheme="green" onClick={handleOnClick}>Sign in</Button>
    </Box>
  );
};

export default SignInWithGoogle;
