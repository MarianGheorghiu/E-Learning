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

    return <h1 style={{textAlign: 'center', paddingTop: '2%'}}>Wellcome, {user}</h1>;
};

export default MainUser;
