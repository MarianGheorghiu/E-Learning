import classes from './DetailsContainer.module.css';
import Image from 'next/image';
import SchoolList from '../SchoolDetail/SchoolList';

const ImageContainer = ({ image }) => {
    return (
        <div className="col-lg-6 col-sm-12  col-xl-7">
            <div className={classes.image}>
                <Image
                    src={`/assets/${image}`}
                    width={250}
                    height={150}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

const DetailsContainer = ({ title, text, isShcool, image }) => {
    return (
        <div className={`container ${classes.details}`} data-aos="fade-left">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-xl-5">
                    <div className={classes.text}>
                        <h2 className={classes.h2}>{title}</h2>
                        <hr className={classes.hr} />
                        <p>{text}</p>
                        {isShcool && <SchoolList />}
                    </div>
                </div>
                <ImageContainer image={image} />
            </div>
        </div>
    );
};

export default DetailsContainer;
