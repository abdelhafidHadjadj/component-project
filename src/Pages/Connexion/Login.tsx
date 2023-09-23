import "./login_sign.css"


function Login() {
    return(
        <section className="cnx-section">
        <div className="img-comp-cnx">
            <img src="https://res.cloudinary.com/gestionprojet/image/upload/v1695484699/6c7bd3ca72a7fc54351d4fdcbd8b6538_1_dzaw5k.png" alt="" />
        </div>
        <div className="form-comp-cnx">

        <form >
            <div>
            <h1>Sign in to Oxido</h1>
            </div>
            <div className="row-form">
            <label>Email</label>
            <input type="email"/>
            </div>
            <div className="row-form">
                <label>Password</label>
                <input type="password" />
            </div>
            <div className="row-form">

            <button className="primary-button" >Submit</button>
            </div>
            <div>
                or
            </div>
            <div className="row-form">
                <button className="border w-1/2">FB</button>
                <button className="border w-1/2">Google</button>
            </div>
        </form>
        </div>
        </section>
    )
}

export default Login