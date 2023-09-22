function Register() {
    return(
        <>
        <h1>Register</h1>
        <form>
            <div><label>Fisrt name</label><input type="firstName" /></div>
            <div><label>Last name</label><input type="lastName" /></div>
            <div><label>Email</label><input type="email" /></div>
            <div><label>Password</label><input type="password" /></div>
        </form>
        </>
    )
}

export default Register