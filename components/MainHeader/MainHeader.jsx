import classes from './MainHeader.module.css';

const MainHeader = ({ children }) => {
    return <div className={classes.main}>{children}</div>;
};

export default MainHeader;
