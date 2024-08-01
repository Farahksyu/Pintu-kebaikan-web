function Header() {
  return (
    <nav className="flex items-center justify-between pt-3 pr-20 pb-3 pl-20">
      <div className=" h-24 w-24">
        <img src="src/assets/icons/logo-mku.png" alt="" />
      </div>
      <div className="flex space-x-8">
        <a href="#" className="hover:text-dark">
          Donasi
        </a>
        <a href="#" className="hover:text-dark">
          Layanan
        </a>
        <a href="#" className="hover:text-dark">
          Event
        </a>
        <a href="#" className="hover:text-dark">
          Akun Saya
        </a>
      </div>
    </nav>
  );
}

export default Header;
