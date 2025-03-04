import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="background-image"></div>

            <Parallax pages={2}>
                <ParallaxLayer offset={-0.01} speed={0.2}>
                    <div className="parallax-layer-content">
                        <h1>welcome welcome welcome</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.3} speed={0.7}>
                    <div className="parallax-layer-content">
                        <h1>test test test</h1>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Home;