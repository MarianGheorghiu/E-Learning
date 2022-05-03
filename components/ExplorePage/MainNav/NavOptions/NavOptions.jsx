import Link from 'next/link';

import classes from './NavOptions.module.css';

const OPTIONS = ['All Courses', 'My Courses', 'Grades', 'Account', 'Logout'];

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

const NavOptions = () => {
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {OPTIONS.map((option, index) => (
                <NavItem key={`option${index}`} option={option} />
            ))}
        </ul>
    );
};

export default NavOptions;
