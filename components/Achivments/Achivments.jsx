import classes from './Achivments.module.css';

const Achivments = () => {
    return (
        <section className={classes.counts}>
            <div className="container">
                <div className={`text-center ${classes.title}`}>
                    <h3 className={classes.h3}>What we have achieved so far</h3>
                    <p>
                        Iusto et labore modi qui sapiente xpedita tempora et aut
                        non ipsum consequatur illo.
                    </p>
                </div>

                <div className="row position-relative">
                    <div className="col-lg-3 col-6 text-center">
                        <span className={`purecounter ${classes.span}`}>
                            232
                        </span>
                        <p className={classes.p}>Clients</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span className={`purecounter ${classes.span}`}>
                            521
                        </span>
                        <p className={classes.p}>Projects</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span className={`purecounter ${classes.span}`}>
                            1463
                        </span>
                        <p className={classes.p}>Hours Of Support</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span className={`purecounter ${classes.span}`}>
                            15
                        </span>
                        <p className={classes.p}>Hard Workers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achivments;
