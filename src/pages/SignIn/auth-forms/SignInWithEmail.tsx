import { Box, Button, Heading, useToast } from '@chakra-ui/react';
import { SyntheticEvent, useReducer } from 'react';
import AuthInput from '../../../components/ui/AuthInput';
import { signInUserWithEmail } from '../../../lib/firebase';
import { useNavigate } from 'react-router-dom';

type SignInStateProps = {
  email: string;
  password: string;
};

const signInReducer = (
  state: SignInStateProps,
  action: { field: string; value: string }
) => {
  return { ...state, [action.field]: action.value };
};


const SignInWithEmail = () => {
  const [userCredentials, dispatch] = useReducer(signInReducer, {
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const toast = useToast();

  const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  const handleOnSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isSuccess = await signInUserWithEmail(userCredentials);

    isSuccess
      ? navigate('/user')
      : toast({
          title: 'Something went wrong',
          description: 'Try again',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
  };
  return (
    <Box as="form" onSubmit={handleOnSubmit}>
      <Heading size="lg">Sign in with email</Heading>
      <AuthInput inputName="Email" onChangeHandler={handleInput} type="email" />
      <AuthInput
        inputName="Password"
        onChangeHandler={handleInput}
        type="password"
      />
      <Button type="submit">Sign In</Button>
    </Box>
  );
};

export default SignInWithEmail;
