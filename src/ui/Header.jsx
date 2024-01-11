import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";

function Header() {
  return (
    <header className="flex items-center justify-end gap-3 px-5 py-4 bg-color-light-brown">
      <UserAvatar/>
      <HeaderMenu/>
    </header>
  );
}

export default Header;
