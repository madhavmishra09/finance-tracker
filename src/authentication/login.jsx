function Login() {
    return (
        <>
            <div>
                <h1>Welcome Back User!</h1>
            </div>
            <div>
                <form action="/login">
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" placeholder="Username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" required />
                    <a href="/forgot-password.jsx">Forgot Your Password?</a>
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login