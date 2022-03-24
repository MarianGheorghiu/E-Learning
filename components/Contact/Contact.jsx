import classes from './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <section className={classes['form-1']} data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className={classes.h2}>Book consultation</h2>
                        <p className={classes.p}>
                            Don't hesitate to give us a call or just use the
                            contact form below
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
