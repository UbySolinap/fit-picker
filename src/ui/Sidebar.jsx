import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BsArrowRightCircleFill } from "react-icons/bs";

import Logo from "./Logo";
import MainNav from "./MainNav";
import UtilitiesNav from "./UtilitiesNav";

function Sidebar() {
  // Boolean that checks if the current screen is mobile or not
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [open, setOpen] = useState(!isMobile);

  function handleClose() {
    if (isMobile) setOpen(false);
  }

  return (
    <aside
      className={`z-20 bg-color-light-blue pt-12 duration-200 md:relative md:block md:w-64 ${open ? "absolute h-screen w-64" : "relative w-16"}`}
    >
      <BsArrowRightCircleFill
        className={`absolute -right-3 top-4 cursor-pointer rounded-full border-2 text-3xl text-color-dark-blue duration-200 md:hidden ${open ? "rotate-180" : ""}`}
        onClick={() => setOpen(!open)}
      />
      <div className="mx-2">
        <Logo open={open} />
        <MainNav open={open} onClose={handleClose} />
        <UtilitiesNav open={open} onClose={handleClose} />
      </div>
    </aside>
  );
}

export default Sidebar;
