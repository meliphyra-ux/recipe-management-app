import { Box } from '@chakra-ui/react';

import styled from '@emotion/styled';

import SignInWithGoogle from './auth-forms/SignInWithGoogle';
import SignInWithEmail from './auth-forms/SignInWithEmail';
import SignUpWithEmail from './auth-forms/SignUpWithEmail';

const StyledSignInContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;

  align-items: center;
  justify-items: center;

  & > form,
  & > div {
    width: 100%;
    height: 100%;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1.5rem;

    border: 1px solid var(--chakra-colors-whiteAlpha-900);
    border-radius: 0.25rem;
  }
  & > form:first-of-type {
  grid-row: 1/3;
  grid-column:2/3;
  }
`;

const SignIn = () => {
  return (
    <StyledSignInContainer as="section">
      <SignInWithGoogle />
      <SignInWithEmail />
      <SignUpWithEmail />
    </StyledSignInContainer>
  );
};

export default SignIn;
