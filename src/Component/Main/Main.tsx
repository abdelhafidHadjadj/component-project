import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home.tsx";
import AboutUs from "../../Pages/About-us/aboutUs.tsx";
import ContactUs from "../../Pages/Contact-us/contactUs.tsx";
import Services from "../../Pages/Services/Services.tsx";
import Register from "../../Pages/Connexion/Register.tsx";
import Login from "../../Pages/Connexion/Login.tsx";

function Main() {
    return(
        <main>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="contact-us" element={<ContactUs/>}/>
                <Route path="about-us" element={<AboutUs/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="regiter" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </main>
    )
}

export default Main