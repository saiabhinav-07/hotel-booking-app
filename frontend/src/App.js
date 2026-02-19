import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import PaymentSuccess from "./pages/PaymentSuccess";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkStyle = (path) => ({
        marginLeft: "25px",
        textDecoration: "none",
        color: isHome && !scrolled ? "white" : "#1c1c1c",
        fontWeight: location.pathname === path ? "700" : "500",
        fontSize: "15px",
        transition: "0.3s ease",
        whiteSpace: "nowrap",
    });

    return ( <
        nav style = {
            {
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                transition: "0.3s ease",
                background: isHome && !scrolled ?
                    "rgba(0,0,0,0.25)" : "white",
                backdropFilter: isHome && !scrolled ? "blur(10px)" : "none",
                boxShadow: isHome && !scrolled ?
                    "none" : "0 4px 20px rgba(0,0,0,0.08)",
            }
        } >
        <
        div style = {
            {
                maxWidth: "1200px",
                width: "100%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 40px",
            }
        } >
        <
        h2 style = {
            {
                color: isHome && !scrolled ? "white" : "#e23744",
                margin: 0,
                fontWeight: "700",
            }
        } >
        HotelBook <
        /h2>

        <
        div style = {
            { display: "flex", alignItems: "center" }
        } >
        <
        Link to = "/"
        style = { linkStyle("/") } >
        Home <
        /Link>

        <
        Link to = "/dashboard"
        style = { linkStyle("/dashboard") } >
        Dashboard <
        /Link>

        <
        Link to = "/bookings"
        style = { linkStyle("/bookings") } >
        Bookings <
        /Link>

        {
            !isLoggedIn && ( <
                >
                <
                Link to = "/login"
                style = { linkStyle("/login") } >
                Login <
                /Link> <
                Link to = "/register"
                style = { linkStyle("/register") } >
                Register <
                /Link> < /
                >
            )
        }

        {
            isLoggedIn && ( <
                button onClick = {
                    () => {
                        localStorage.removeItem("loggedIn");
                        setIsLoggedIn(false);
                    }
                }
                style = {
                    {
                        marginLeft: "25px",
                        background: "#e23744",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                    }
                } >
                Logout <
                /button>
            )
        } <
        /div> < /
        div > <
        /nav>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("loggedIn") === "true"
    );

    return ( <
        BrowserRouter >
        <
        Navbar isLoggedIn = { isLoggedIn }
        setIsLoggedIn = { setIsLoggedIn }
        />

        <
        Routes >
        <
        Route path = "/"
        element = { < LandingPage / > }
        />

        <
        Route path = "/login"
        element = { < Login setIsLoggedIn = { setIsLoggedIn }
            />} / >

            <
            Route path = "/register"
            element = { < Register / > }
            />

            <
            Route
            path = "/dashboard"
            element = {
                isLoggedIn ? < Dashboard / > : < Navigate to = "/login" / >
            }
            />

            <
            Route
            path = "/bookings"
            element = {
                isLoggedIn ? < Bookings / > : < Navigate to = "/login" / >
            }
            />

            <
            Route
            path = "/payment-success"
            element = {
                isLoggedIn ? < PaymentSuccess / > : < Navigate to = "/login" / >
            }
            /> < /
            Routes > <
            /BrowserRouter>
        );
    }

    export default App;