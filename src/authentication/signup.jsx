function SignUp(){
    return(<>
        <div><h1>Let's Sign Up!</h1></div>
        <form action="/signup" method="POST">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
        </form>
    </>)
}
export default SignUp;