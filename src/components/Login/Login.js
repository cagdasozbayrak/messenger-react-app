import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./login.css";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    return (
        <div className="login-container">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onLogin(username);
                }}
                className="login-form"
            >
                <TextField
                    id={"username-input"}
                    label={"username"}
                    name={"username"}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Button id="login-button" type={"submit"}>
                    Log in
                </Button>
            </form>
        </div>
    );
};

export default Login;
