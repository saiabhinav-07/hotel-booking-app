import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async() => {
        const response = await fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const message = await response.text();
        alert(message);
    };

    return ( <
        div style = {
            {
                minHeight: "100vh",
                backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }
        } >
        { /* DARK BLUR OVERLAY */ } <
        div style = {
            {
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(4px)",
            }
        } >
        < /div>

        { /* REGISTER CARD */ } <
        div style = {
            {
                position: "relative",
                width: "380px",
                background: "rgba(255,255,255,0.95)",
                padding: "35px",
                borderRadius: "14px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                zIndex: 1,
            }
        } >
        <
        h2 style = {
            {
                textAlign: "center",
                color: "#e23744",
                marginBottom: "25px",
            }
        } >
        Create Account <
        /h2>

        <
        input type = "text"
        placeholder = "Full Name"
        onChange = {
            (e) => setName(e.target.value) }
        style = { inputStyle }
        />

        <
        input type = "email"
        placeholder = "Email"
        onChange = {
            (e) => setEmail(e.target.value) }
        style = { inputStyle }
        />

        <
        input type = "password"
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value) }
        style = { inputStyle }
        />

        <
        button onClick = { handleRegister }
        style = { buttonStyle } >
        Register <
        /button>

        { /* LINKS */ } <
        div style = {
            { marginTop: "15px", textAlign: "center" } } >
        <
        p style = {
            { margin: "8px 0", fontSize: "14px" } } >
        Already have an account ? { " " } <
        Link to = "/login"
        style = {
            { color: "#e23744", fontWeight: "bold" } } >
        Login <
        /Link> <
        /p>

        <
        p style = {
            { margin: "8px 0", fontSize: "14px" } } >
        <
        Link to = "/forgot-password"
        style = {
            { color: "#555", textDecoration: "none" } } >
        Forgot Password ?
        <
        /Link> <
        /p> <
        /div> <
        /div> <
        /div>
    );
}

/* STYLES */
const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
};

const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#e23744",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
};

export default Register;