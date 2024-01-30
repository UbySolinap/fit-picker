import { GiClothes } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";

function MainNav({ open, onClose }) {
  return (
    <ul className="mt-8 space-y-5 border-y-2 border-color-light-gray py-6">
      <li>
        <NavLink
          to="/outfit-picker"
          className={`sidebar-list ${open ? "p-2" : "p-1"}`}
          onClick={onClose}
        >
          <GiClothes className="sidebar-icon" />
          <span className={`sidebar-text ${open ? "" : "hidden"}`}>
            Fit Picker
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={`sidebar-list ${open ? "p-2" : "p-1"}`}
          onClick={onClose}
        >
          <IoBarChartSharp className="sidebar-icon" />
          <span className={`sidebar-text ${open ? "" : "hidden"}`}>
            Statistics
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/user-settings"
          className={`sidebar-list ${open ? "p-2" : "p-1"}`}
          onClick={onClose}
        >
          <MdManageAccounts className="sidebar-icon" />
          <span className={`sidebar-text ${open ? "" : "hidden"}`}>
            Account
          </span>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
