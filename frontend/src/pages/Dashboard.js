import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
    const [rooms, setRooms] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [search, setSearch] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const locationData = useLocation();
    const navigate = useNavigate();

    const selectedLocation =
        locationData.state && locationData.state.location ?
        locationData.state.location :
        "";

    useEffect(() => {
        fetch("http://localhost:8080/api/rooms")
            .then((res) => res.json())
            .then((data) => {
                let filteredData = data;

                // Location filter
                if (selectedLocation) {
                    filteredData = filteredData.filter(
                        (room) =>
                        room.location &&
                        room.location.toLowerCase() ===
                        selectedLocation.toLowerCase()
                    );
                }

                // Sorting
                if (sortOrder === "low") {
                    filteredData.sort(
                        (a, b) => a.pricePerNight - b.pricePerNight
                    );
                } else if (sortOrder === "high") {
                    filteredData.sort(
                        (a, b) => b.pricePerNight - a.pricePerNight
                    );
                }

                setRooms(filteredData);
            });
    }, [selectedLocation, sortOrder]);

    // Search + price filter (frontend filtering)
    const filteredRooms = rooms.filter((room) => {
        const matchesSearch = room.roomType
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesPrice = maxPrice ?
            room.pricePerNight <= parseInt(maxPrice) :
            true;

        return matchesSearch && matchesPrice;
    });

    return ( <
        div style = {
            { marginTop: "100px", background: "#f8f9fa" } } >

        { /* HERO */ } <
        div style = {
            {
                height: "250px",
                backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                position: "relative",
            }
        } >
        <
        div style = {
            {
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
            }
        } >
        < /div>

        <
        h1 style = {
            { position: "relative", fontSize: "36px" } } > {
            selectedLocation ?
            `Hotels in ${selectedLocation}` :
                "Explore Our Hotels"
        } <
        /h1> <
        /div>

        { /* FILTER BAR */ } <
        div style = {
            {
                background: "white",
                padding: "25px",
                margin: "40px auto",
                width: "85%",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
            }
        } >
        <
        input type = "text"
        placeholder = "Search by room type"
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value) }
        style = {
            {
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                width: "200px",
            }
        }
        />

        <
        input type = "number"
        placeholder = "Max Price"
        value = { maxPrice }
        onChange = {
            (e) => setMaxPrice(e.target.value) }
        style = {
            {
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                width: "150px",
            }
        }
        />

        <
        select value = { sortOrder }
        onChange = {
            (e) => setSortOrder(e.target.value) }
        style = {
            {
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                width: "180px",
                cursor: "pointer",
            }
        } >
        <
        option value = "" > Sort By Price < /option> <
        option value = "low" > Low→ High < /option> <
        option value = "high" > High→ Low < /option> <
        /select> <
        /div>

        { /* ROOMS GRID */ } <
        div style = {
            {
                padding: "0 8% 80px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
            }
        } >
        {
            filteredRooms.length === 0 ? ( <
                div style = {
                    { gridColumn: "1/-1", textAlign: "center" } } >
                <
                h2 > No hotels found😔 < /h2> <
                /div>
            ) : (
                filteredRooms.map((room) => ( <
                    div key = { room.id }
                    style = {
                        {
                            background: "white",
                            borderRadius: "18px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
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
                    img src = { room.imageUrl }
                    alt = { room.roomType }
                    style = {
                        {
                            width: "100%",
                            height: "220px",
                            objectFit: "cover",
                        }
                    }
                    />

                    <
                    div style = {
                        { padding: "20px" } } >
                    <
                    h3 > { room.roomType } < /h3> <
                    p style = {
                        { color: "gray" } } >
                    Room# { room.roomNumber } <
                    /p>

                    <
                    p style = {
                        {
                            marginTop: "10px",
                            fontWeight: "bold",
                            color: "#e23744",
                            fontSize: "18px",
                        }
                    } >
                    ₹{ room.pricePerNight } <
                    /p>

                    <
                    button onClick = {
                        () =>
                        navigate("/bookings", {
                            state: { room: room },
                        })
                    }
                    style = {
                        {
                            marginTop: "15px",
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "none",
                            background: "#e23744",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",
                        }
                    } >
                    Book Now <
                    /button> <
                    /div> <
                    /div>
                ))
            )
        } <
        /div> <
        /div>
    );
}

export default Dashboard;