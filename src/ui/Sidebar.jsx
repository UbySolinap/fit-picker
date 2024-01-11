import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BsArrowRightCircleFill  } from "react-icons/bs";

import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
    // Boolean that checks if the current screen is mobile or not
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    const [open, setOpen]  = useState(!isMobile)

    return (
        <aside className={`flex flex-col md:relative pt-12 items-center bg-color-light-blue duration-200 h-screen md:block md:w-80 ${open ? "w-64 absolute" : "w-16 relative"}`}>
            <BsArrowRightCircleFill className={`text-color-dark-blue duration-200 text-3xl md:hidden cursor-pointer border-2 rounded-full absolute top-4 -right-3 ${open ? "rotate-180" : ""}`} onClick={() => setOpen(!open)}/>
            <div className="flex flex-col items-center">
                <Logo open={open}/>
                <MainNav open={open}/>
            </div>
        </aside>
    )
}

export default Sidebar
