import { useState, useRef } from 'react';
import CustomInput from './CustomInput/CustomInput';

import classes from './LoginForm.module.css';

import GoogleIcon from '@mui/icons-material/Google';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';

const LoginForm = (props) => {
    const router = useRouter();
    // inputs data
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    // login / singup state
    const [createAccount, setCreateAccount] = useState(false);
    // state errors
    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [createUserError, setCreateUserError] = useState(false);
    const [loginUserError, setLoginUserError] = useState(false);
    // loading state
    const [isLoading, setLoading] = useState(false);

    const createAccountHandler = () => {
        setCreateAccount((prevState) => !prevState);
    };

    const createUser = async (name, email, password) => {
        const response = await fetch('/api/auth/singup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    };

    const loginUser = async (email, password) => {
        const response = await fetch('/api/auth/singin', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        let enteredUsername;

        if (createAccount) {
            enteredUsername = usernameRef.current.value;
            const usernameIsValid = enteredUsername.trim().length > 5;
            if (!usernameIsValid) {
                return setUsernameError(true);
            }

            const emailIsValid =
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    enteredEmail
                );
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

            try {
                setLoading(true);

                const userCreated = await createUser(
                    enteredUsername,
                    enteredEmail,
                    enteredPassword
                );

                if (userCreated.ok) clearInputs();
                if (!userCreated.ok) {
                    setLoading(false);
                    setCreateUserError(true);
                }
            } catch (error) {
                setLoading(false);
                setCreateUserError(true);
            }
        } else {
            const emailIsValid =
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    enteredEmail
                );
            const passwordIsValid = enteredPassword.trim().length >= 8;

            if (!emailIsValid) return setEmailError(true);

            if (!passwordIsValid) {
                setEmailError(false);
                return setPasswordError(true);
            }

            try {
                setLoading(true);

                const loggedUser = await loginUser(
                    enteredEmail,
                    enteredPassword
                );
                if (loggedUser.ok) {
                    // close modal
                    props.closeModal();
                    // redirect to explore page
                    router.push('/explore');
                    // clear inputs just in case
                    clearInputs();
                }
                if (!loggedUser.ok) {
                    setLoginUserError(true);
                    setLoading(false);
                    clearInputs();
                }
            } catch (error) {
                setLoading(false);
            }
        }
    };

    const clearInputs = () => {
        emailRef.current.value = '';
        passwordRef.current.value = '';
        usernameRef.current.value = '';
        setEmailError(false);
        setPasswordError(false);
        setUsernameError(false);
        setCreateAccount(false);
        setLoading(false);
    };

    //  UI
    const usernameField = (
        <>
            <CustomInput
                ref={usernameRef}
                id="username"
                type="text"
                usernameError={usernameError}
                label="Username"
            />
            {usernameError && (
                <p style={{ color: '#ff512f' }}>
                    Please enter a valid username (at least 5 characters)
                </p>
            )}
        </>
    );

    const singInForm = (
        <>
            <CustomInput
                ref={emailRef}
                type="email"
                label="Email"
                id="email"
                emailError={emailError}
            />
            {emailError && (
                <p style={{ color: '#ff512f' }}>Please enter a valid email</p>
            )}

            <CustomInput
                ref={passwordRef}
                type="password"
                label="Password"
                id="password"
            />

            {passwordError && (
                <p style={{ color: '#ff512f' }}>
                    Your password should have at least 8 characters
                </p>
            )}
        </>
    );

    const spinner = (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    const createAccountButton = (
        <>
            {isLoading && spinner}
            {!isLoading && (
                <button className={classes['custom__button']}>
                    Create Account
                </button>
            )}
        </>
    );
    const loginButton = (
        <>
            {isLoading && spinner}
            {!isLoading && (
                <button className={classes['custom__button']}>Login</button>
            )}
        </>
    );

    const socialButtons = (
        <div className={classes.social}>
            <div>
                <GoogleIcon /> Google
            </div>
            <div className={classes.sign} onClick={createAccountHandler}>
                <ArrowRightAltIcon /> Sign {createAccount ? 'In' : 'Up'}
            </div>
        </div>
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
                {singInForm}
                {createAccount && createAccountButton}
                {!createAccount && loginButton}
                {createUserError && (
                    <p className={classes['custom_account_error']}>
                        Account already exist or try again.
                    </p>
                )}
                {loginUserError && (
                    <p className={classes['custom_account_error']}>
                        Bad username or password. Try again or reset.
                    </p>
                )}
                {socialButtons}
            </form>
        </>
    );
};

export default LoginForm;
