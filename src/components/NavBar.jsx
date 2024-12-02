
import logo from "../assets/monkeytype.svg"
import { LuCrown } from "react-icons/lu";
import { FaKeyboard } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

function NavBar (){
    return  (
    <div className="row">
        <div className="col">
      <img src="https://i.redd.it/w5r7dx19uxxb1.jpg"/>
      <h3 class="sen">Persona Series Lore Summary</h3>
      <Link to={"/personaone"}><button class="bttn">Persona 1</button></Link>
      <button class="bttn">Persona 2 Innocent Sin</button>
      <button class="bttn">Persona 2 Eternal Punishment</button>
      <a href="./components/goofy.jsx" src=""><button class="bttn">Persona 3</button></a>
      
        </div>

        <div className="col">
        <button class="bttn">Persona 4</button>
        <button class="bttn">Persona 5</button>
        </div>
    </div>
);
}

export default NavBar;