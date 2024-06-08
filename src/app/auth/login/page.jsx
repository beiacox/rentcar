import "./styles.css";

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="input-container">
                        <input type="email" placeholder="Email ID" required />
                    </div>
                    <div className="input-container">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <a href="#" className="forgot-password">Forgot Password?</a>
                <a href="#" className="register">Don't have an account? Register</a>
            </div>
        </div>
    );
}

export default Login;
