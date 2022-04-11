import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';

const handler = async (req, res) => {
    const data = req.body;
    const { name, email, password } = data;

    // register user
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    const user = userCredential.user;

    updateProfile(auth.currentUser, {
        displayName: name,
    });

    const formDataCopy = { ...data };
    delete formDataCopy.password;
    formDataCopy.timestamp = serverTimestamp();

    await setDoc(doc(db, 'users', user.uid), formDataCopy);

    res.status(201).json({ message: 'Singed up !' });
};

export default handler;
