import classes from './GradesDetail.module.css';
import Image from 'next/image';

const GradesDetail = () => {
    return (
        <div className={`container ${classes.grades}`}>
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-xl-5">
                    <div className={classes.text}>
                        <h2 className={classes.h2}>Design & development</h2>
                        <hr className={classes.hr} />
                        <p>
                            Our team of competent designers and developers are
                            able to create beautiful designs and structured code
                            that will serve your ecommerce project to establish
                            your market position and increase revenues
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12  col-xl-7">
                    <div className={classes.image}>
                        <Image
                            src="/assets/grades.jpg"
                            width={250}
                            height={150}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradesDetail;
