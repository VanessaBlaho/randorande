import React, { useState, useEffect,useContext } from "react";
import UserContext from "../../UserContext";

export default function Login(props){

    const [values, setValues]= useState({
        username: '',
        password: '',
    })

const [errors,setErrors]= useState({});

const {setUser} = useContext(UserContext);

const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(values);

    // clear the errors
    setErrors({});
try {
    // make the AJAX request
    const response = await axios.post('/login', values);
    // get the (already JSON-parsed) response data
    // const response_data = response.data; // use later for console.log()
    setUser(null);
    // ADD NAVIGATE TO MY JOURNAL HERE
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


}
}