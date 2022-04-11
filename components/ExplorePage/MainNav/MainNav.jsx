import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MainNav = () => {
    const router = useRouter();
    const [user, setUser] = useState('');

    useEffect(() => {
        fetch('api/auth/get-user')
            .then((res) => res.json())
            .then((data) => {
                if (!data.user) return router.push('/');
                setUser(data.user.displayName);
            });
    }, []);

    const logoutHandler = async () => {
        const response = await fetch('/api/auth/get-user', {
            method: 'POST',
            body: null,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const jsonRes = await response.json();
        if (jsonRes.logged === 'LOGGED_OUT') router.push('/');
    };

    return (
        <>
            <h1>{user}</h1>
            <button
                type="button"
                className="btn  btn-primary"
                onClick={logoutHandler}
            >
                Logout
            </button>
        </>
    );
};

export default MainNav;
