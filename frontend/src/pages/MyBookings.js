import { useEffect, useState } from "react";

function MyBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/bookings/all")
            .then((res) => res.json())
            .then((data) => setBookings(data))
            .catch((err) => console.error(err));
    }, []);

    return ( <
        div style = {
            { padding: "40px" } } >
        <
        h2 style = {
            { marginBottom: "30px" } } > My Bookings < /h2>

        {
            bookings.length === 0 ? ( <
                p > No bookings found. < /p>
            ) : ( <
                div style = {
                    { display: "grid", gap: "20px" } } > {
                    bookings.map((booking) => ( <
                        div key = { booking.id }
                        style = {
                            {
                                padding: "20px",
                                borderRadius: "12px",
                                background: "#f8f8f8",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            }
                        } >
                        <
                        p > < strong > Room ID: < /strong> {booking.roomId}</p >
                        <
                        p > < strong > User: < /strong> {booking.userEmail}</p >
                        <
                        p > < strong > Check In: < /strong> {booking.checkIn}</p >
                        <
                        p > < strong > Check Out: < /strong> {booking.checkOut}</p >
                        <
                        /div>
                    ))
                } <
                /div>
            )
        } <
        /div>
    );
}

export default MyBookings;