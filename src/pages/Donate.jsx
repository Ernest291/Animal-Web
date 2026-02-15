function Donate() {
    const donateStyle = {
        backgroundImage: "url('/animal-bg2.jpeg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "white"

    };

    const contentStyle = {
        maxWidth: "900px",
        margin: "30px auto",
        padding: "30px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "15px",
        lineHeight: "1.8",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    };

    return (
        <div style={donateStyle}>
            <div style={contentStyle}>
                <h1>Donate to Our Cause</h1>
            </div>
            <div style={contentStyle}>
                <p>
                    You can support our mission to promote animal welfare and help animals in need by making a donation. Your contribution will go towards providing food, shelter, medical care, and other essential resources for animals in our community. Every donation, no matter the size, makes a difference and helps us continue our work to create a better world for animals. Thank you for your generosity and support!
                    Contact or send your donations/Gcash to: 09850810576
                </p>
            </div>
        </div>
    )
}

export default Donate;