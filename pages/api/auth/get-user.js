import { getAuth } from 'firebase/auth';

const handler = (req, res) => {
    const auth = getAuth();
    if (req.method === 'POST') {
        auth.signOut();
        res.status(201).send({ logged: 'LOGGED_OUT' });
    } else {
        const user = auth.currentUser;
        res.status(201).send({ user });
    }
};

export default handler;
