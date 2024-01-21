import { GiClothes } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";

function MainNav({ open }) {
  return (
    <ul className="mt-8 space-y-5 border-y-2 border-color-light-gray py-6">
      <li className={`sidebar-list ${open ? "p-2" : "p-1"}`}>
        <GiClothes className="sidebar-icon" />
        <span className={`sidebar-text ${open ? "" : "hidden"}`}>
          Fit Picker
        </span>
      </li>
      <li className={`sidebar-list ${open ? "p-2" : "p-1"}`}>
        <IoBarChartSharp className="sidebar-icon" />
        <span className={`sidebar-text ${open ? "" : "hidden"}`}>
          Statistics
        </span>
      </li>
      <li className={`sidebar-list ${open ? "p-2" : "p-1"}`}>
        <MdManageAccounts className="sidebar-icon" />
        <span className={`sidebar-text ${open ? "" : "hidden"}`}>Account</span>
      </li>
    </ul>
  );
}

export default MainNav;
