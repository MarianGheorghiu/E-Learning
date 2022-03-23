import classes from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <div className="col">
            <form className={classes['form-group']}>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <input
                            type="text"
                            name="name"
                            className={`form-control ${classes['form-control-input']}`}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                            type="email"
                            className={`form-control ${classes['form-control-input']}`}
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <input
                        type="text"
                        className={`form-control ${classes['form-control-input']}`}
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <textarea
                        className={`form-control ${classes['form-control-input']}`}
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button className={classes.btn} type="submit">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
