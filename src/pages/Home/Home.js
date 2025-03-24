import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Home.css";
import upArrow from "../../assets/uparrow.png";
import phoebeImage from "../../assets/phoebe.jpg";
import mount from "../../assets/mountain.jpg";

const Home = () => {
    const parallaxRef = useRef(null);
    const [opacity, setOpacity] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

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
            <Parallax pages={isMobile ? 8 : 7} className="parallax" ref={parallaxRef}>

                <ParallaxLayer sticky={{ start: 0.2, end: 0.2 }}>
                    <div className="text-item welcome-title" style={{ top: "10%" }}>welcome</div>
                    <img
                        src={mount}
                        alt="bg"
                        className="welcome-image"
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
                        <img src={upArrow} alt="up arrow" className="scrolling-image" />
                    </div>
                </ParallaxLayer>

                {/* Adjusted spacing for mobile */}
                <ParallaxLayer sticky={{ start: 1.1, end: isMobile ? 3.2 : 2.9 }}>
                    <div className="text-item" style={{ top: isMobile ? "15%" : "20%" }}>resumé</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.5, end: isMobile ? 3.6 : 3.3 }}>
                    <div className="text-item" style={{ top: isMobile ? "35%" : "40%" }}>projects</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.9, end: isMobile ? 4.0 : 3.7 }}>
                    <div className="text-item" style={{ top: isMobile ? "55%" : "60%" }}>contact</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 2.3, end: isMobile ? 4.4 : 4.1 }}>
                    <div className="text-item" style={{ top: isMobile ? "75%" : "80%" }}>life</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.3, end: isMobile ? 3.4 : 3.1 }}>
                    <div className="text-item-small" style={{ top: isMobile ? "20%" : "25%" }}>
                        my experience within computer science
                    </div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.7, end: isMobile ? 3.8 : 3.5 }}>
                    <div className="text-item-small" style={{ top: isMobile ? "40%" : "45%" }}>
                        some of my favorite projects i've made recently
                    </div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 2.1, end: isMobile ? 4.2 : 3.9 }}>
                    <div className="text-item-small" style={{ top: isMobile ? "60%" : "65%" }}>
                        where you can reach me at any time
                    </div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 2.5, end: isMobile ? 4.6 : 4.3 }}>
                    <div className="text-item-small" style={{ top: isMobile ? "80%" : "85%" }}>
                        my favorite pics and a look into my life
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={isMobile ? 6.01 : 6.01} speed={0.5}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <img
                            src={phoebeImage}
                            alt="My dog Phoebe"
                            style={{
                                display: "block",
                                margin: "0 auto",
                                transform: isMobile ? "scale(0.55)" : "scale(0.20)",
                                maxWidth: "100%"
                            }}
                        />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={isMobile ? 6.75 : 6.75} speed={0.5}>
                    <div className="copyright">
                        my dog phoebe ^
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={isMobile ? 6.9 : 6.9} speed={0.5}>
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} josh amstutz. don't steal my code please.
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Home;