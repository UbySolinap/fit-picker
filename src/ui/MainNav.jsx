import { GiClothes } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

function MainNav({open}) {
    return (
        <ul className="mt-8 border-t-2 border-color-light-gray pt-16 space-y-6 text-white font-semibold">
          <li className={`sidebar-list ${open ? "px-6 md:px-3" : "px-2"}`}><GiClothes className="sidebar-icon"/> <span className={`sidebar-text ${open ? "" : "hidden"}`}>Fit Picker</span> </li>  
          <li className={`sidebar-list ${open ? "px-6 md:px-3" : "px-2"}`}><IoBarChartSharp className="sidebar-icon"/> <span className={`sidebar-text ${open ? "" : "hidden"}`}>Statistics</span> </li>  
          <li className={`sidebar-list ${open ? "px-6 md:px-3" : "px-2"}`}><IoSettingsSharp className="sidebar-icon"/> <span className={`sidebar-text ${open ? "" : "hidden"}`}>Account Settings</span> </li>  
        </ul>
    )
}

export default MainNav
