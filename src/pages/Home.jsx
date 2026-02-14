import "../css/home.css"


function Home() {

    const homeStyle = {
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
        <div style={homeStyle}>
            <div className="home">
                <h2>They Can’t Speak, But They Feel</h2>
            </div>

            <div style={contentStyle}>
                <p>Behind every pair of innocent eyes is a life that deserves safety, love, and respect. Animal cruelty is not just a distant issue we scroll past — it’s a reality happening every single day.</p>
                <p>Some are abandoned. Some are neglected. Some are hurt by the very people they trust. But they all share one thing in common: they can’t speak up for themselves. They rely on us to be their voice, to stand up for their rights, and to fight against the cruelty they face.</p>
                <p>They are not objects.
                    They are not entertainment.
                    They are living beings who deserve care and respect.</p>
                <p>When we choose compassion over cruelty, adoption over abandonment, and action over silence, we become part of the solution. Even the smallest effort — sharing information, reporting abuse, supporting shelters — can help protect a life.</p>
            </div>
        </div>
    )
}

export default Home

