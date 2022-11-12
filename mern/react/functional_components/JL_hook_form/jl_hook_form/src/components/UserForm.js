import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfrimPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfrimPassword("");

    };

    return (
    <div>
        <h1>UserForm</h1> 

        <form onSubmit={ createUser}>
            <div>
                <label className={" form-label"}>First Name:</label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={firstName} className={" form-control-sm"}/>
            </div>
            <div>
                <label className={" form-label"}>Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} value={lastName} className={" form-control-sm"}/>
            </div>
            <div>
                <label className={" form-label"}>Email:</label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)} value={email} className={" form-control-sm"}/>
            </div>
            <div>
                <label className={" form-label"}>Password:</label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} value={password} className={" form-control-sm"}/>
            </div>
            <div>
                <label className={" form-label"}>Confirm Password:</label>
                <input type="password" onChange={ (e) => setConfrimPassword(e.target.value)} value={confirmPassword} className={" form-control-sm"}/>
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