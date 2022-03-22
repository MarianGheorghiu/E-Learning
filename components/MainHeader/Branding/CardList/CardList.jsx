import classes from './CardList.module.css';

const CardList = ({ icon, title, text }) => {
    return (
        <div className={classes.card}>
            <div className={classes.image}>{icon}</div>
            <div className="card-body">
                <h1 className={classes.h1}>{title}</h1>
                <div className={classes.text}>{text}</div>
            </div>
        </div>
    );
};

export default CardList;
