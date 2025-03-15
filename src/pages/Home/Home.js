import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Home.css";
import upArrow from "../../assets/uparrow.png";
import phoebeImage from "../../assets/phoebe.jpg";
import mount from "../../assets/mountain.jpg";

const Home = () => {
    const parallaxRef = useRef(null);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const currentScroll = parallaxRef.current.current;
                const fadeStart = 0.9;

                let newOpacity = 1 - (currentScroll - fadeStart) * 5;
                newOpacity = Math.max(0, Math.min(1, newOpacity));
                setOpacity(newOpacity);
            }
        };

        const interval = setInterval(handleScroll, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Parallax pages={7} className="parallax" ref={parallaxRef}>

                <ParallaxLayer sticky={{ start: 0.2, end: 0.2 }}>
                    <div className="text-item" style={{ top: "20%", color: "black"  }}>welcome</div>
                    <img
                        src={mount}
                        alt="bg"
                        className="welcome-image"
                        style={{ display: "block", margin: "0px auto", maxWidth: "1000px", borderRadius: "30px" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 0.9, end: 1 }}>
                    <div
                        className="up-image-container"
                        style={{
                            opacity: opacity,
                            transition: "opacity 0.2s ease-out"
                        }}
                    >
                        <img src={upArrow} alt="Scrolling Image" className="scrolling-image" />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.1, end: 2.9 }}>
                    <div className="text-item" style={{ top: "20%" }}>resumé</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.5, end: 3.3 }}>
                    <div className="text-item" style={{ top: "40%" }}>projects</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.9, end: 3.7 }}>
                    <div className="text-item" style={{ top: "60%" }}>contact</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 2.3, end: 4.1 }}>
                    <div className="text-item" style={{ top: "80%" }}>life</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.3, end: 3.1 }}>
                    <div className="text-item-small" style={{ top: "25%" }}>my experience within computer science</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.7, end: 3.5 }}>
                    <div className="text-item-small" style={{ top: "45%" }}>some of my favorite projects i've made recently</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 2.1, end: 3.9 }}>
                    <div className="text-item-small" style={{ top: "65%" }}>where you can reach me at any time</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 2.5, end: 4.3 }}>
                    <div className="text-item-small" style={{ top: "85%" }}>my favorite pics and a look into my life</div>
                </ParallaxLayer>

                <ParallaxLayer offset={5.99} speed={0.5}>
                    <img
                        src={phoebeImage}
                        alt="Copyright Notice"
                        style={{ display: "block", margin: "0 auto", transform: "scale(0.20)" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={6.7} speed={0.5}>
                    <div className="copyright" style={{ textAlign: "center", fontSize: "12px", padding: "10px", color: "white"}}>
                        my dog phoebe ^
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={6.9} speed={0.5}>
                    <div className="copyright" style={{ textAlign: "center", fontSize: "12px", padding: "10px", color: "white"}}>
                        &copy; {new Date().getFullYear()} josh amstutz. don't steal my code please.
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Home;
