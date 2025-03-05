import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={0.2}>
                    <div className="parallax-layer-content">
                        <h1>welcome</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.37} speed={0.9}>
                    <div className="parallax-layer-content">
                        <h1>test test test</h1>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Home;