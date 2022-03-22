import { useState, useRef } from 'react';
import classes from './LoginForm.module.css';

import GoogleIcon from '@mui/icons-material/Google';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const LoginForm = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [createAccount, setCreateAccount] = useState(false);
    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const createAccountHandler = () => {
        setCreateAccount((prevState) => !prevState);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        if (createAccount) {
            const enteredUsername = usernameRef.current.value;
            const usernameIsValid = enteredUsername.trim().length > 5;
            if (!usernameIsValid) {
                return setUsernameError(true);
            }
        }

        const emailIsValid =
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail);
        const passwordIsValid = enteredPassword.trim().length >= 8;

        if (!emailIsValid) {
            setUsernameError(false);
            return setEmailError(true);
        }

        if (!passwordIsValid) {
            setUsernameError(false);
            setEmailError(false);
            return setPasswordError(true);
        }

        emailRef.current.value = '';
        passwordRef.current.value = '';
        usernameRef.current.value = '';
        setEmailError(false);
        setPasswordError(false);
        setUsernameError(false);
    };

    const usernameField = (
        <>
            <label className={classes['custom__label']} htmlFor="username">
                Username
            </label>
            <input
                ref={usernameRef}
                className={classes['custom__input']}
                type="text"
                placeholder="Username"
                id="username"
                required
            />
            {usernameError && (
                <p style={{ color: '#ff512f' }}>
                    Please enter a valid username (at least 5 characters)
                </p>
            )}
        </>
    );

    return (
        <>
            <div className={classes.background}>
                <div className={classes.shape}></div>
                <div className={classes.shape}></div>
            </div>

            <form className={classes['custom__form']} onSubmit={submitHandler}>
                <h3 className={classes.h3}>
                    {createAccount ? 'Sign Up' : 'Log In'}
                </h3>
                {createAccount && usernameField}

                <label className={classes['custom__label']} htmlFor="email">
                    Email
                </label>
                <input
                    ref={emailRef}
                    className={classes['custom__input']}
                    type="email"
                    placeholder="Email"
                    id="email"
                    required
                />
                {emailError && (
                    <p style={{ color: '#ff512f' }}>
                        Please enter a valid email
                    </p>
                )}

                <label className={classes['custom__label']} htmlFor="password">
                    Password
                </label>
                <input
                    ref={passwordRef}
                    className={classes['custom__input']}
                    type="password"
                    placeholder="Password"
                    id="password"
                    required
                />
                {passwordError && (
                    <p style={{ color: '#ff512f' }}>
                        Your password should have at least 8 characters
                    </p>
                )}

                <button className={classes['custom__button']}>
                    {!createAccount ? 'Log In' : 'Create Account'}
                </button>
                <div className={classes.social}>
                    <div>
                        <GoogleIcon /> Google
                    </div>
                    <div
                        className={classes.sign}
                        onClick={createAccountHandler}
                    >
                        <ArrowRightAltIcon /> Sign {createAccount ? 'In' : 'Up'}
                    </div>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
