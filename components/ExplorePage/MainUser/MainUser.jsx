import { useEffect, useState } from 'react';

const MainUser = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        fetch('api/auth/get-user')
            .then((res) => res.json())
            .then((data) => {
                if (!data.user) return router.push('/');
                setUser(data.user.displayName);
            });
    }, []);

    return <h1>{user}</h1>;
};

export default MainUser;
