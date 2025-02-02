import React from "react";
import {useSelector} from "react-redux";
import videoHomepage from "../../assets/video-homepage.mp4";
import {useNavigate} from "react-router-dom";
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user?.isAuthenticated);
    // const account = useSelector(state => state.user?.account);
    const navigate = useNavigate();
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
                    {/*Nếu đăng nhập thì sẽ hiện khác*/}
                    {isAuthenticated === false ?
                        <button onClick ={() => navigate ('/login')}>Get's started. It's free</button>
                    :
                        <button onClick={() =>navigate ('/users')}>Doing quiz now </button>

                    }
                </div>
            </div>
        </div>
    )
}
export default HomePage;