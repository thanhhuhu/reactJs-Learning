import './Login.scss';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {postLogin, postRegister} from "../../services/apiService";
import {toast} from "react-toastify";
//hook
import {useDispatch} from "react-redux";
//hàm userAction
import {doLogin} from "../../redux/action/userAction";
import { ImSpinner9 } from "react-icons/im";

const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyDown = (event) =>{
        if (event && event.key === 'Enter'){
                handleLogin();
        }
    }
    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email and password are required");
            return;
        }
        setIsLoading(true);
        try {
            let data = await postLogin(email, password);

            if (data && data.EC === 0) {
                // khai bao dispatch + action => khai bao trong react-component
                dispatch(doLogin(data));
                toast.success(data.EM);
                setIsLoading(false);
                navigate('/'); // Navigate to homepage
            } else if ( data && +data.EC !== 0 ) {
                toast.error(data?.EM || "Login failed. Please try again.");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    // để chuyển hướng đến homepage
    return (

        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button onClick={() =>{navigate('/register')}}>Sign-up</button>
            </div>
            <div className="title col-4 mx-auto">
                Nguyen Thanh
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who are you?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        onChange={(event)=>setEmail(event.target.value)}
                        value={email}
                        type="email"
                        className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                        onChange={(event)=>setPassword(event.target.value)}
                        value={password}
                        type="password" className="form-control" id="password"
                        onKeyDown={(event) => handleKeyDown (event)}
                    />
                </div>
                <span className={"forgot-password"}>Forgot password?</span>
                <div>
                    <button
                        onClick={()=> handleLogin()}
                        className={"btn-submit"}
                        disabled = {isLoading}>
                        {isLoading  === true &&
                        <ImSpinner9 className="loader-icon"   />}
                        Login
                    </button>
                </div>
                <div className = 'text-center'>
                    <span onClick={() =>{navigate('/')}}>
                        &#60;  	&#60; Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}
export default Login;