import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';

const handler = async (req, res) => {
    const data = req.body;
    const { email, password } = data;

    // register user
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
        displayName: user.displayName,
    });

    res.status(201).json({ message: 'Singed up!' });

    // create credentials to store user to database
    const dataCopy = { ...data }; // copy data
    const { name, email: userEmail } = dataCopy; // extract wanted data
    const storedUser = {
        name,
        email: userEmail,
        timestamp: serverTimestamp(),
    }; // create used with data i need
    // add user to database
    await setDoc(doc(db, 'users', user.uid), storedUser);
};

export default handler;
