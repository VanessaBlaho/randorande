import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);

        // clear the errors
        setErrors({});
        try {
            // make the AJAX request
            const response = await axios.post("/login", values);
            // get the (already JSON-parsed) response data
            // const response_data = response.data; // use later for console.log()
            setUser("logged");
            // ADD NAVIGATE TO MY JOURNAL HERE
            navigate("/my-journal");
        } catch (error) {
            // if the response code is not 2xx (success)
            console.log("Error Response:", error.response.data.errors);
            if (error.response.status === 422) {
                // handle validation errors here
                setErrors(error.response.data.errors);
            } else if (error.response.status === 500) {
                console.log("UNKNOWN ERROR", error.response.data);
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
            <h1 className="login_headline">Login</h1>
            <form
                className="register_form"
                action="/login"
                method="post"
                onSubmit={handleSubmit}
            >
                <div className="labels_and_inputs__container">
                    <div className="input_row">
                        <label htmlFor="username" className="input_row__label">
                            Username
                        </label>
                        <br />
                        <input
                            className="input_row__input"
                            type="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    {errors.username ? (
                        <div className="errors">
                            {errors.username.map((error, i) => (
                                <div key={i} className="error">
                                    {error}
                                </div>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="input_row">
                        <label htmlFor="password" className="input_row__label">
                            Password
                        </label>
                        <input
                            className="input_row__input"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>

                    {errors.password ? (
                        <div className="errors">
                            {errors.password.map((error, i) => (
                                <div key={i} className="error">
                                    {error}
                                </div>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                    <p className="forgot_password">
                        &#128148; I forgot my password
                    </p>
                </div>
                <button className="login_btn">Login</button>
                <br />
                <div className="register">
                    I don't have an account{" "}
                    <button className="login_btn">
                        <Link to="/register" className="login_btn">
                            Register
                        </Link>
                    </button>
                </div>
            </form>
        </>
    );
}
