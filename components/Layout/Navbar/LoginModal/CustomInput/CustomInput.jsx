import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <>
            <label className={classes['custom__label']} htmlFor={props.id}>
                {props.label}
            </label>
            <input
                ref={ref}
                className={classes['custom__input']}
                type={props.type}
                placeholder={props.label}
                id={props.id}
                required
            />
        </>
    );
});

export default CustomInput;
