import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { setDoc, doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '/pages/firebase.config';

const googleLogin = async () => {
    try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        // check for user
        const docRef = doc(db, 'users', user.uid);
        const docSnapshot = await getDoc(docRef);
        // if user does no exist create account
        if (!docSnapshot.exists()) {
            await setDoc(doc(db, 'users', user.uid), {
                name: user.displayName,
                email: user.email,
                timestamp: serverTimestamp(),
            });
        }
        return 'logged';
    } catch (error) {
        return error;
    }
};

export default googleLogin;
