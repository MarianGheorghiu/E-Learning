import classes from './Achivments.module.css';

const ACHIVMENTS = [
    {
        numbrer: 2232,
        title: 'Clients',
    },
    {
        numbrer: 821,
        title: 'Projects',
    },
    {
        numbrer: 4456,
        title: 'Hours Of Support',
    },
    {
        numbrer: 21,
        title: 'Hard Workers',
    },
];

const AchivmentItem = ({ number, title }) => {
    return (
        <div className="col-lg-3 col-6 text-center">
            <span className={classes.span}>{number}</span>
            <p className={classes.p}>{title}</p>
        </div>
    );
};

const Achivments = () => {
    return (
        <section className={classes.counts} data-aos="fade-up-right">
            <div className="container">
                <div className={`text-center ${classes.title}`}>
                    <h3 className={classes.h3}>What we have achieved so far</h3>
                    <p>
                        Iusto et labore modi qui sapiente xpedita tempora et aut
                        non ipsum consequatur illo.
                    </p>
                </div>

                <div className="row position-relative">
                    {ACHIVMENTS.map((achivment, i) => (
                        <AchivmentItem
                            key={i}
                            number={achivment.numbrer}
                            title={achivment.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achivments;
