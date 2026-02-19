import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LandingPage() {
    const navigate = useNavigate();

    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    // ✅ UPDATED CITIES (Hyderabad, Goa, Mumbai)
    const cities = [{
            name: "Hyderabad",
            image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        },
        {
            name: "Goa",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
        },
        {
            name: "Mumbai",
            image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66",
        },
    ];

    const handleSearch = () => {
        navigate("/dashboard", {
            state: { location, checkIn, checkOut },
        });
    };

    return ( <
        div style = {
            { marginTop: "80px", fontFamily: "Poppins, sans-serif" } } >

        { /* HERO SECTION */ } <
        div style = {
            {
                height: "100vh",
                backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
            }
        } >
        { /* Overlay */ } <
        div style = {
            {
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(0,0,0,0.6))",
            }
        } >
        < /div>

        <
        div style = {
            { position: "relative", zIndex: 2, width: "100%" } } >
        <
        h1 style = {
            {
                fontSize: "64px",
                fontWeight: "800",
                marginBottom: "20px",
            }
        } >
        Find Your Perfect Stay <
        /h1>

        <
        p style = {
            { fontSize: "20px", marginBottom: "40px" } } >
        Discover premium hotels at unbeatable prices <
        /p>

        { /* SEARCH BAR */ } <
        div style = {
            {
                background: "white",
                padding: "25px",
                borderRadius: "20px",
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                width: "75%",
                margin: "auto",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                flexWrap: "wrap",
            }
        } >
        <
        input type = "text"
        placeholder = "Where are you going?"
        value = { location }
        onChange = {
            (e) => setLocation(e.target.value) }
        style = {
            {
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                width: "250px",
            }
        }
        />

        <
        input type = "date"
        value = { checkIn }
        onChange = {
            (e) => setCheckIn(e.target.value) }
        style = {
            {
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
            }
        }
        />

        <
        input type = "date"
        value = { checkOut }
        onChange = {
            (e) => setCheckOut(e.target.value) }
        style = {
            {
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
            }
        }
        />

        <
        button onClick = { handleSearch }
        style = {
            {
                padding: "14px 35px",
                borderRadius: "10px",
                border: "none",
                background: "#e23744",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
            }
        } >
        Search <
        /button> <
        /div> <
        /div> <
        /div>

        { /* LOCATIONS SECTION */ } <
        div style = {
            { padding: "80px 8%" } } >
        <
        h2 style = {
            {
                fontSize: "40px",
                marginBottom: "50px",
                textAlign: "left",
            }
        } >
        Locations <
        /h2>

        <
        div style = {
            {
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                justifyContent: "center",
            }
        } >
        {
            cities.map((city, index) => ( <
                div key = { index }
                onClick = {
                    () =>
                    navigate("/dashboard", {
                        state: { location: city.name },
                    })
                }
                style = {
                    {
                        width: "320px",
                        borderRadius: "15px",
                        overflow: "hidden",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        cursor: "pointer",
                        transition: "0.3s",
                    }
                }
                onMouseOver = {
                    (e) =>
                    (e.currentTarget.style.transform =
                        "translateY(-8px)")
                }
                onMouseOut = {
                    (e) =>
                    (e.currentTarget.style.transform =
                        "translateY(0)")
                } >
                <
                img src = { city.image }
                alt = { city.name }
                style = {
                    {
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                    }
                }
                /> <
                div style = {
                    { padding: "20px" } } >
                <
                h3 > { city.name } < /h3> <
                p style = {
                    { color: "gray" } } >
                Explore premium stays in { city.name } <
                /p> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>

        { /* WHY CHOOSE US */ } <
        div style = {
            {
                background: "#f8f9fa",
                padding: "100px 8%",
                textAlign: "center",
            }
        } >
        <
        h2 style = {
            { fontSize: "42px", marginBottom: "60px" } } >
        Why Choose HotelBook ?
        <
        /h2>

        <
        div style = {
            {
                display: "flex",
                justifyContent: "center",
                gap: "60px",
                flexWrap: "wrap",
            }
        } >
        <
        div style = {
            { maxWidth: "260px" } } >
        <
        h3 > 🏨Premium Hotels < /h3> <
        p >
        Luxury stays in top cities with world - class comfort. <
        /p> <
        /div>

        <
        div style = {
            { maxWidth: "260px" } } >
        <
        h3 > 💰Best Price < /h3> <
        p >
        Transparent pricing with zero hidden charges. <
        /p> <
        /div>

        <
        div style = {
            { maxWidth: "260px" } } >
        <
        h3 > ⚡Instant Booking < /h3> <
        p >
        Fast, secure and seamless booking experience. <
        /p> <
        /div> <
        /div> <
        /div>

        { /* FOOTER */ } <
        div style = {
            {
                background: "#111",
                color: "white",
                padding: "30px",
                textAlign: "center",
            }
        } >
        ©2026 HotelBook.All rights reserved. <
        /div> <
        /div>
    );
}

export default LandingPage;