import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useReducer } from 'react';

import { signUpUserWithEmail } from '../../../lib/firebase';

import { Box, Button, Heading, useToast } from '@chakra-ui/react';
import AuthInput from '../../../components/ui/AuthInput';

type SignUpStateProps = {
  name: string;
  email: string;
  password: string;
};

const signUpReducer = (
  state: SignUpStateProps,
  action: { field: string; value: string }
) => {
  return { ...state, [action.field]: action.value };
};

const SignUpWithEmail = () => {
  const [userCredentials, dispatch] = useReducer(signUpReducer, {
    name: '',
    email: '',
    password: '',
  });

  const { email, password, name: displayName } = userCredentials;
  const navigate = useNavigate();
  const toast = useToast();

  const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  const handleOnSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isSuccess = await signUpUserWithEmail({
      email,
      password,
      displayName,
    });

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
      <Heading size="lg">Sign up with email</Heading>
      <AuthInput type="text" inputName="Name" onChangeHandler={handleInput} />
      <AuthInput type="email" inputName="Email" onChangeHandler={handleInput} />
      <AuthInput
        type="password"
        inputName="Password"
        onChangeHandler={handleInput}
      />
      <Button type="submit">Sign Up</Button>
    </Box>
  );
};

export default SignUpWithEmail;
