function Logo({ open }) {
  return (
    <img
      src="/logo.png"
      alt="logo"
      className={`${open ? "h-24" : "h-12"} mx-auto`}
    />
  );
}

export default Logo;
