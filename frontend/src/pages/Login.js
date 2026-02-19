import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async() => {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const message = await response.text();

        if (message === "Login successful") {
            localStorage.setItem("loggedIn", "true");
            setIsLoggedIn(true);
            navigate("/dashboard");
        } else {
            alert(message);
        }
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
        } > { /* Blur Overlay */ } <
        div style = {
            {
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(6px)",
            }
        } >
        <
        /div>

        { /* Login Card */ } <
        div style = {
            {
                position: "relative",
                zIndex: 2,
                width: "360px",
                background: "white",
                padding: "35px",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }
        } >
        <
        h2 style = {
            { textAlign: "center", color: "#e23744" }
        } > Login < /h2>

        <
        input placeholder = "Email"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        style = {
            {
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "6px",
                border: "1px solid #ddd",
            }
        }
        />

        <
        input type = "password"
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        style = {
            {
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "6px",
                border: "1px solid #ddd",
            }
        }
        />

        <
        button onClick = { handleLogin }
        style = {
            {
                width: "100%",
                padding: "12px",
                background: "#e23744",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
            }
        } >
        Login <
        /button>

        <
        p style = {
            { marginTop: "15px", textAlign: "center" }
        } >
        Don’ t have an account ? { " " } <
        Link to = "/register"
        style = {
            { color: "#e23744", fontWeight: "bold" }
        } >
        Register <
        /Link> < /
        p >

        <
        p style = {
            { textAlign: "center", fontSize: "14px", color: "#777" }
        } >
        Forgot Password ?
        <
        /p> < /
        div > <
        /div>
    );
}

export default Login;