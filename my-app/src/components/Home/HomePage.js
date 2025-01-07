import React from "react";
import videoHomepage from "../../assets/video-homepage.mp4";
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay={true} muted loop >
                <source src={videoHomepage}
                        type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className={"title-1"}>Get to know your customers with forms worth filling out</div>
                <div className={"title-2"}>Collect all the data you need to understand customers with forms designed to be refreshingly different.</div>
                <div className={"title-3"}>
                    <button>Get's started. It's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;