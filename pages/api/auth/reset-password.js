import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { db } from '../../firebase.config';

const handler = async (req, res) => {
    const email = req.body.email;
    const auth = getAuth();
    try {
        await sendPasswordResetEmail(auth, email);
        res.status(201).json({ message: 'Email was sent !' });
    } catch (error) {
        res.status(401).json({ message: error });
    }
};

export default handler;
