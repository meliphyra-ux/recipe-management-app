import { signOutUser } from '../../../lib/firebase';
import { Button, useToast } from '@chakra-ui/react';

const SignOutButton = () => {
  const toast = useToast();
  const handleOnClick = async () => {
    const isSuccess = await signOutUser();
    if (!isSuccess) {
      toast({
        title: 'Something went wrong',
        description: 'Try again',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Button colorScheme="red" onClick={handleOnClick}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
