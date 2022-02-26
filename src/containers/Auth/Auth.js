import React, { useState, useEffect, useRef } from 'react';
import { SimpleKeyboard } from '../../components';

// import actions from 'Actions';


const Auth = props => {
    const [passwordInputType, setPasswordInputType] = useState('password');
    const [isInvalid, setIsInvalid] = useState(''); // is-invalid
    const [inputFocused, setInputFocused] = useState(false);
    const [inputs, setInputs] = useState({});
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");
    const keyboard = useRef();

    // const loading = useSelector(state => state.app.getIn(['auth', 'loading']));
    let loginError = useState("");

    // const dispatch = useDispatch();

    const { history } = props;

    const signInHandler = (event) => {
        event.preventDefault();
        // dispatch(actions.auth.authUser(inputs["email"], inputs["password"], false, history))
    };

    useEffect(() => {
        if (loginError !== null && loginError !== undefined) {
            if (loginError.error_description === 'Bad credentials') {
                setIsInvalid('is-invalid');
            }
        }
    }, [loginError]);

    const onChangeAll = inputs => {
        /**
         * Here we spread the inputs into a new object
         * If we modify the same object, react will not trigger a re-render
         */
        setInputs({ ...inputs });
        console.log("Inputs changed", inputs);
    };

    const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "default";
        setLayoutName(newLayoutName);
    };

    const onChangeInput = event => {
        const inputVal = event.target.value;

        setInputs({
            ...inputs,
            [inputName]: inputVal
        });

        keyboard.current.setInput(inputVal);
    };

    const getInputValue = inputName => {
        return inputs[inputName] || "";
    };

    const onKeyPress = button => {
        console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    // console.log("loading", loading);

    return (
        <React.Fragment>
            <nav className="navbar topNav">
                <img src={require('../../assets/images/ewis-logo.png')} alt="brand-logo" />
                <button
                    className="btn btn-primary"
                    onClick={signInHandler}
                >
                    Sign in
                </button>
            </nav>
            <div className="container">
                <div className="commonWrapper">
                    <div className="login__wrapper">
                        <div className="login_content">
                            <h4 className="header-title">Sign in to 365 Systems</h4>
                            <div className="input__wrapper">
                                <div className="input-group mb-3">
                                    <input
                                        id="email"
                                        className={"form-control form-control-md " + isInvalid}
                                        type="email"
                                        name="email entering"
                                        placeholder="Email"
                                        value={getInputValue("email")}
                                        onChange={event => {
                                            setIsInvalid('');
                                            onChangeInput(event)
                                        }}
                                        onFocus={() => {
                                            setInputName('email')
                                            setInputFocused(true)
                                        }}
                                    />
                                </div>
                                <div className="input-group btn-inline right mb-3">
                                    <input
                                        id='password'
                                        className={"form-control form-control-md " + isInvalid}
                                        type={passwordInputType}
                                        name="password entering"
                                        placeholder="Password"
                                        value={getInputValue("password")}
                                        onChange={event => {
                                            setIsInvalid('');
                                            onChangeInput(event)
                                        }}
                                        onFocus={() => {
                                            setInputName('password')
                                            setInputFocused(true)
                                        }}
                                    />
                                    <button
                                        type="button"
                                        className="btn"
                                        onMouseDown={() => setPasswordInputType('text')}
                                        onMouseUp={() => setPasswordInputType('password')}
                                    >
                                        <i className="bi bi-eye" />
                                    </button>
                                </div>
                                {loginError !== null && loginError !== undefined &&
                                    <div className="valid-feedback">{loginError.error_description === 'Bad credentials' ? 'Seems password or email address wrong!' : 'Oops, something went wrong!'} </div>
                                }
                            </div>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Forget password?</a>
                        </div>
                    </div>
                    {inputFocused && <SimpleKeyboard
                        keyboardRef={r => (keyboard.current = r)}
                        inputName={inputName}
                        layoutName={layoutName}
                        onChangeAll={onChangeAll}
                        onKeyPress={onKeyPress}
                    />}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Auth;