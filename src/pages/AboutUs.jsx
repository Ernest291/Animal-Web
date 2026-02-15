import './Donate';
import '../css/about.css'
function AboutUs() {
    const aboutStyle = {
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
        <div style={aboutStyle}>
            <div style={contentStyle}>
                <h2>About Us</h2>
            </div>
            <div style={contentStyle}>
                <p>We are a team of students passionate about animal advocacy and welfare.
                    We created this website to provide a platform for people to learn about animal welfare and to connect with local animal shelters and rescue organizations.
                    Our mission is to promote animal welfare and to help animals in need find loving homes. We believe that every animal deserves to be treated with kindness and respect, and we are committed to making a positive impact in the lives of animals in our community.
                    Please consider <a href="./donate">donating</a> to our cause or volunteering with us to help make a difference in the lives of animals in need. Together, we can create a better world for animals and promote a more compassionate society.
                </p>
            </div>
            <div style={contentStyle}>
                <h3>Team</h3>
                <p>
                    - Aurora Nicole Estante: A passionate advocate for animal welfare, Aurora has been involved in various animal rescue organizations and has a deep love for all creatures. She is dedicated to raising awareness about animal rights and promoting responsible pet ownership.
                    <br />
                               
                    - Angel Enojo: With a background in veterinary science, Angel brings a wealth of knowledge about animal health and welfare to the team. She is committed to educating the public about the importance of proper animal care and advocating for stronger animal protection laws.
                    <br />
                           
                    - Denise Kate Dana: A creative and compassionate individual, Denise has a strong passion for animal advocacy. She has been actively involved in local animal shelters and rescue groups, working tirelessly to improve the lives of animals in need. Denise is dedicated to spreading awareness about animal welfare issues and encouraging others to get involved in the cause.
                    <br />
                             
                    - Marian Mae cabale: A compassionate animal lover, Marian has been volunteering at animal shelters for years and has a deep commitment to animal welfare. She is passionate about educating the public on the importance of adopting pets from shelters and promoting responsible pet ownership. Marian is also involved in various animal rescue efforts and is always looking for ways to make a positive impact on the lives of animals in need.
                    <br />
                        
                    -Ernest Jude Tiu: A dedicated animal lover, Ernest has been volunteering at animal shelters for years and has a deep commitment to animal welfare. He is passionate about educating the public on the importance of adopting pets from shelters and promoting responsible pet ownership. Ernest is also involved in various animal rescue efforts and is always looking for ways to make a positive impact on the lives of animals in need.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;