import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";

function HeaderNav() {
  return (
    <header className="flex items-center justify-end gap-3 bg-color-light-brown px-5 py-4">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}

export default HeaderNav;
