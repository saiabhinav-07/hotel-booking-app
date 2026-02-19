import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Bookings() {
    const location = useLocation();
    const navigate = useNavigate();

    const room =
        location.state && location.state.room ? location.state.room : null;

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [loading, setLoading] = useState(false);

    if (!room) {
        return ( <
            div style = {
                { padding: "40px", textAlign: "center" }
            } >
            <
            h2 > No Room Selected < /h2> <
            button onClick = {
                () => navigate("/dashboard")
            }
            style = {
                {
                    padding: "10px 20px",
                    background: "#e23744",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                }
            } >
            Back to Dashboard <
            /button> < /
            div >
        );
    }

    const handleBooking = async() => {
        if (!checkIn || !checkOut) {
            alert("Please select check-in and check-out dates");
            return;
        }

        if (!paymentMethod) {
            alert("Please select payment method");
            return;
        }

        try {
            setLoading(true);

            const bookingData = {
                userEmail: "test@gmail.com",
                roomId: room.id,
                checkIn: checkIn,
                checkOut: checkOut,
                paymentMethod: paymentMethod,
            };

            const response = await fetch(
                "http://localhost:8080/api/bookings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            if (!response.ok) {
                throw new Error("Booking failed");
            }

            navigate("/payment-success");
        } catch (error) {
            alert("Booking failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return ( <
        div style = {
            {
                minHeight: "100vh",
                background: "#f8f8f8",
                padding: "40px",
            }
        } >
        <
        div style = {
            {
                maxWidth: "500px",
                margin: "auto",
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            }
        } >
        <
        h2 style = {
            { color: "#e23744", marginBottom: "20px" }
        } >
        Booking
        for { room.roomType } <
        /h2>

        <
        p >
        <
        strong > Room#: < /strong> {room.roomNumber} < /
        p >

        <
        p >
        <
        strong > Price: < /strong> ₹{room.pricePerNight} < /
        p >

        <
        div style = {
            { marginTop: "20px" }
        } >
        <
        label > Check In: < /label> <
        input type = "date"
        value = { checkIn }
        onChange = {
            (e) => setCheckIn(e.target.value)
        }
        style = {
            {
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
            }
        }
        />

        <
        label > Check Out: < /label> <
        input type = "date"
        value = { checkOut }
        onChange = {
            (e) => setCheckOut(e.target.value)
        }
        style = {
            {
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
            }
        }
        />

        <
        label > Payment Method: < /label> <
        select value = { paymentMethod }
        onChange = {
            (e) => setPaymentMethod(e.target.value)
        }
        style = {
            {
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "6px",
            }
        } >
        <
        option value = "" > Select Payment < /option> <
        option value = "Card" > Credit / Debit Card < /option> <
        option value = "UPI" > UPI < /option> <
        option value = "NetBanking" > Net Banking < /option> < /
        select > <
        /div>

        <
        button onClick = { handleBooking }
        disabled = { loading }
        style = {
            {
                marginTop: "25px",
                width: "100%",
                padding: "12px",
                background: "#e23744",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
            }
        } > { loading ? "Processing..." : "Confirm & Pay" } <
        /button> < /
        div > <
        /div>
    );
}

export default Bookings;