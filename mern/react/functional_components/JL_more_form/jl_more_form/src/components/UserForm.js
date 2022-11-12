import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        // const newUser = { firstName, lastName, email, password, confirmPassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    } 
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    } 
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    } 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    } 
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Check ya password!");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
    <div>
        <h1>UserForm</h1> 

        <form onSubmit={createUser}>
            <div>
                <label className={" form-label"}>First Name:</label>
                <input type="text" onChange={handleFirstName} value={firstName} className={" form-control-sm"}/>
                {
                    firstNameError ?
                    <p className={" text-danger"}> {firstNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label className={" form-label"}>Last Name:</label>
                <input type="text" onChange={handleLastName} value={lastName} className={" form-control-sm"}/>
                {
                    lastNameError ?
                    <p className={" text-danger"}> {lastNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label className={" form-label"}>Email:</label>
                <input type="text" onChange={handleEmail} value={email} className={" form-control-sm"}/>
                {
                    emailError ?
                    <p className={" text-danger"}> {emailError}</p>:
                    ''
                }
            </div>
            <div>
                <label className={" form-label"}>Password:</label>
                <input type="password" onChange={handlePassword} value={password} className={" form-control-sm"}/>
                {
                    passwordError ?
                    <p className={" text-danger"}> {passwordError}</p>:
                    ''
                }

            </div>
            <div>
                <label className={" form-label"}>Confirm Password:</label>
                <input type="password" onChange={handleConfirmPassword} value={confirmPassword} className={" form-control-sm"}/>
                {
                    confirmPasswordError ?
                    <p className={" text-danger"}> {confirmPasswordError}</p>:
                    ''
                }

            </div>
            <input type="submit" value="Your Form Data" className={" btn btn-primary"}/>

        </form>

        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>

    </div>
    );
};

export default UserForm