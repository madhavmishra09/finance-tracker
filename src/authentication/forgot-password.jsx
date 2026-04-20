function ForgotPassword() {
    return (
        <>
            <div>
                <h1>Reset Your Password</h1>
            </div>
            <div>
                <form>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                    <button type="submit">Send Reset Link</button>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword