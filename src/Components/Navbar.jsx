import logo3 from "../assets/logo3.png";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
//import { IoLogoCodepen } from "react-icons/io";


const Navbar = () => {
    return <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex- items-center">
            <img className="mx-2 w-20" src={logo3} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagramSquare />
        </div>
    </nav>

};

export default Navbar;
