import Image from 'next/image';
import classes from './SchoolDetail.module.css';

import SchoolList from './SchoolList';

const SchoolDetail = () => {
    return (
        <div className={`container ${classes.school}`}>
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-xl-5">
                    <div className={classes.text}>
                        <h2 className={classes.h2}>Branding & strategy</h2>
                        <hr className={classes.hr} />
                        <p>
                            To build a solid foundation for your online shop you
                            need a strong brand and a bulletproof strategy. You
                            can rely on our experience to create a beautiful and
                            efficient online shop
                        </p>
                        <SchoolList />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12  col-xl-7">
                    <div className={classes.image}>
                        <Image
                            src="/assets/school.png"
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

export default SchoolDetail;
