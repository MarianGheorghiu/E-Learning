import Image from 'next/image';
import classes from './Navbar.module.css';
import NavList from './NavMenu/NavList';

const Navbar = () => {
    return (
        <nav
            className={`navbar navbar-expand-lg  navbar-dark ${classes['nav__backround']}`}
            data-aos="zoom-in"
        >
            <div className="container">
                <Image
                    className={classes.logo}
                    src="/assets/logo.png"
                    width={100}
                    height={50}
                />

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
                        <NavList />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
