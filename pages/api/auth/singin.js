import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebase.config';

const handler = async (req, res) => {
    const data = req.body;
    const { email, password } = data;

    const auth = getAuth();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        res.status(201).json({ message: 'Logged In!' });
    } catch (error) {
        res.status(401).json({ message: error });
    }
};

export default handler;
