import Image from 'next/image';

import classes from './Hero.module.css';

const Hero = () => {
    const pageImg = (
        <Image
            src="/assets/header-logo.png"
            alt="main-image"
            width={60}
            height={50}
            layout="responsive"
        />
    );
    return (
        <>
            <section className={`${classes['hero-section']}`}>
                <div className="container">
                    <div className="row align-items-center text-white">
                        <div className="col text-start">
                            <h1 className={classes.h1}>
                                Welcome To Your Future School
                            </h1>
                            <h2 className={classes.h2}>
                                Here you will learn what your need and what you
                                want, you can select which courses you like and
                                never stop learning !
                            </h2>
                            <button className={classes.btn}>Discover</button>
                        </div>

                        <div className="col text-end hero__animate">
                            {pageImg}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
