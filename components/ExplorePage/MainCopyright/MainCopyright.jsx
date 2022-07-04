import React from 'react';
import classes from './MainCopyright.module.css';

const MainCopyright = () => {
    return (
        <div className={classes.copyright}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className={classes.p}>
                            Copyright © MSchool. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCopyright;
