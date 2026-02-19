import { useNavigate } from "react-router-dom";

function PaymentSuccess() {

    const navigate = useNavigate();

    return ( <
        div style = {
            {
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #e23744, #ff6b6b)",
                color: "white",
                textAlign: "center"
            }
        } >
        <
        div style = {
            {
                background: "white",
                color: "#1c1c1c",
                padding: "50px",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                width: "400px"
            }
        } >
        <
        h1 style = {
            { color: "#e23744" } } > Payment Successful🎉 < /h1>

        <
        p style = {
            { marginTop: "15px", color: "#555" } } >
        Your booking has been confirmed. <
        /p>

        <
        button onClick = {
            () => navigate("/dashboard") }
        style = {
            {
                marginTop: "25px",
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#e23744",
                color: "white",
                fontWeight: "600",
                cursor: "pointer"
            }
        } >
        Back to Dashboard <
        /button> <
        /div> <
        /div>
    );
}

export default PaymentSuccess;