import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';

const useAuthState = () => {
  const [user, setUser] = useState<User | null | undefined>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, [auth]);
  return [user];
};

export default useAuthState;
