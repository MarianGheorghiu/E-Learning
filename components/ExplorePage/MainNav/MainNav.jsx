import { useRouter } from 'next/router';

import classes from './MainNav.module.css';

import Image from 'next/image';
import Link from 'next/link';

import NavOptions from './NavOptions/NavOptions';

const MainNav = () => {
    const router = useRouter();

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
        <nav
            className={`navbar navbar-expand-lg  navbar-dark bg-primary ${classes.nav}`}
        >
            <div className="container">
                <Link href="/explore">
                    <a className={`${classes.brand}`}>
                        <Image
                            className={`${classes.logo}`}
                            src="/assets/logo.png"
                            width={50}
                            height={40}
                        />
                        <span className="navbar-brand mb-0 h1">Home</span>
                    </a>
                </Link>

                <button
                    className="navbar-toggler p-0 border-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBackdrop"
                    aria-controls="offcanvasWithBackdrop"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`offcanvas offcanvas-end ${classes['custom__menu']}`}
                    tabIndex="-1"
                    id="offcanvasWithBackdrop"
                    aria-labelledby="offcanvasWithBackdropLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasWithBackdropLabel"
                        >
                            Menu
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <NavOptions />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
