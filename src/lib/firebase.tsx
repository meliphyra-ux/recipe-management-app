import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA4vYtQF1CalTnkKXRdTGi-ysiNPYlyPBs',
  authDomain: 'recipe-management-app-7eeeb.firebaseapp.com',
  projectId: 'recipe-management-app-7eeeb',
  storageBucket: 'recipe-management-app-7eeeb.appspot.com',
  messagingSenderId: '389272977326',
  appId: '1:389272977326:web:5504c0ac49e468029a923f',
};

type UserCredetials = {
  email: string;
  password: string;
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

export async function signInUserWithGooglePopup(): Promise<boolean> {
  try {
    const { user } = await signInWithPopup(auth, GoogleProvider);
    if (user) {
      return true;
    }
    throw new Error('Error with sign in');
  } catch (error) {
    const { message } = error as Error;
    console.warn(message);
    return false;
  }
}

export async function signInUserWithEmail({
  email,
  password,
}: UserCredetials): Promise<boolean> {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      return true;
    }
    throw new Error('Error with sign in');
  } catch (error) {
    const { message } = error as Error;
    console.warn(message);
    return false;
  }
}

export async function signUpUserWithEmail({
  displayName,
  email,
  password,
}: UserCredetials & { displayName: string }): Promise<boolean> {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (user) {
      const docSnap = await createUserDocument(user, displayName);
      console.log(docSnap);
      return true;
    }
    throw new Error('Error with sign in');
  } catch (error) {
    const { message } = error as Error;
    console.warn(message);
    return false;
  }
}

export async function signOutUser(): Promise<boolean> {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    const { message } = error as Error;
    console.warn(message);
    return false;
  }
}

export async function createUserDocument(user: User, displayName: string) {
  try {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log('triggered');
      await setDoc(docRef, {
        displayName,
        email: user.email,
        created_at: serverTimestamp(),
      });
      return await getDoc(docRef);
    }
  } catch (error) {
    const { message } = error as Error;
    console.warn(message);
    return false;
  }
}

export async function getRecipes() {
  const pageSize = 20;
  const q = query(collection(db, 'recipes'), limit(pageSize));
  const querySnapshot = await getDocs(q);

  return querySnapshot
}
