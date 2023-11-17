import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";


export default function Register(props) {

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
        age_confirmation: false,
    });

    const [errors, setErrors] = useState({});

    const { setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(values);

        // clear the errors
        setErrors({});

        // fetch with axios
        try {
            // make the AJAX request
            const response = await axios.post('/register', values);
            // get the (already JSON-parsed) response data
            // const response_data = response.data; // use later for console.log()
            setUser(null);
        } catch (error) {
            // if the response code is not 2xx (success)
            switch (error.response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <>
            <h1 className="register_headline">Create Account</h1>
            <p className="register_instructions">Already have an account?</p>
            <button className="register_btn">Login</button>
            <br />
            <form
                className="register_form"
                action="/register"
                method="post"
                onSubmit={handleSubmit}
            >
                <div className="input_row">
                    <label htmlFor="first_name">First name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.first_name ? (
                    <>
                    <div className="errors">
                        {errors.first_name.map((error, i) => (
                            <div key={i} className="error">
                                {error}
                            </div>
                        ))}
                    </div>
                    <br />
                    </>
                ) : (
                    ""
                )}
                <div className="input_row">
                    <label htmlFor="last_name">Last name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.last_name ? (
                    <>
                    <div className="errors">
                        {errors.last_name.map((error, i) => (
                            <div key={i} className="error">
                                {error}
                            </div>
                        ))}
                    </div>
                    <br />
                    </>
                ) : (
                    ""
                )}
                <div className="input_row">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.username ? (
                    <>
                    <div className="errors">
                        {errors.username_name.map((error, i) => (
                            <div key={i} className="error">
                                {error}
                            </div>
                        ))}
                    </div>
                    <br />
                    </>
                ) : (
                    ""
                )}
                <div className="input_row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.email ? (
                    <>
                    <div className="errors">
                        {errors.email.map((error, i) => (
                            <div key={i} className="error">
                                {error}
                            </div>
                        ))}
                    </div>
                    <br />
                    </>
                ) : (
                    ""
                )}
                <div className="input_row">
                    <label htmlFor="password">Create password</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.password ? (
                    <>
                    <div className="errors">
                        {errors.password.map((error, i) => (
                            <div key={i} className="error">
                                {error}
                            </div>
                        ))}
                    </div>
                    <br />
                    </>
                ) : (
                    ""
                )}
                <div className="input_row">
                    <label htmlFor="password_confirmation">
                        Confirm password
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={values.password_confirmation}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.password_confirmation ? (
                    <>
                    <div className="errors">
                        {errors.password_confirmation.map((error, i) => (
                            <div key={i} className="error">
                                {error}
                            </div>
                        ))}
                    </div>
                    <br />
                    </>
                ) : (
                    ""
                )}
                <div className="input_row">
                    <label htmlFor="age_confirmation">I am 18</label>
                    <input
                        type="checkbox"
                        name="age_confirmation"
                        
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.age_confirmation ? (
                    <>
                    <div className="errors">
                        {errors.age_confirmation.map((error, i) => (
                            <div key={i} className="error">
                                {error}
                            </div>
                        ))}
                    </div>
                    <br />
                    </>
                ) : (
                    ""
                )}
                <button>Register</button>
                <br />
            </form>
        </>
    );
}
