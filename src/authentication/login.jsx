import { useState } from "react"
import { Link } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    };
    return (
        <>
            <div>
                <h1>Welcome Back User!</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" required />       
                    <button type="submit">Login</button>
                </form>
                <p><Link to="/forgot-password">Forgot Your Password?</Link></p>
            </div>
        </>
    )
}

export default Login