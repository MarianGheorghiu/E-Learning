import classes from './TrustedBy.module.css';

const CLIENTS_INDEX = [1, 2, 3, 4, 5, 6, 7, 8];

const Client = ({ index }) => {
    return (
        <div className="col-lg-3 col-md-4 col-6">
            <div className={classes['client-logo']}>
                <img
                    src={`assets/clients/client-${index}.png`}
                    className={`img-fluid ${classes.img}`}
                    alt="img"
                />
            </div>
        </div>
    );
};

const TrustedBy = () => {
    return (
        <section style={{ marginTop: '2%' }} data-aos="fade-right">
            <div className="container">
                <h1 className={classes.h1}>Trusted By</h1>
                <div
                    className={`row no-gutters  clearfix wow fadeInUp ${classes['clients-wrap']}`}
                >
                    {CLIENTS_INDEX.map((client) => (
                        <Client key={client} index={client} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
