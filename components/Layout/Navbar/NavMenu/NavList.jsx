import Link from 'next/link';
import LoginModal from '../LoginModal/LoginModal';

import classes from './NavList.module.css';

const OPTIONS = ['Home', 'Details', 'Strength', 'About', 'Contact'];

const NavItem = ({ option }) => {
    return (
        <li className="nav-item">
            <Link href={`/${option.toLowerCase()}`}>
                <a className={`nav-link  ${classes['custom__link']}`}>
                    {option}
                </a>
            </Link>
        </li>
    );
};

const NavList = () => {
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {OPTIONS.map((option, index) => (
                <NavItem key={`option${index}`} option={option} />
            ))}

            <LoginModal />
        </ul>
    );
};

export default NavList;
