function Header() {
  return (
    <header className="flex justify-between">
      <div className="h-4/6 w-5/12">
        <img src="src/assets/icons/logo-mku.png" alt="" />
      </div>
      <ul className="flex gap-32 text-text">
        <li>
          <a className="hover:text-dark">Donasi</a>
        </li>
        <li>
          <a className="hover:text-dark">Layanan</a>
        </li>
        <li>
          <a className="hover:text-dark">Event</a>
        </li>
        <li>
          <a className="hover:text-dark">Akun Saya</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
