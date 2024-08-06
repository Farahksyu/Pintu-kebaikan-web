import Button from "../Button/Button";
function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h1>
      <div className="flex flex-row justify-center p-10">
        <div className="">
          <img
            src="/src/assets/images/ImageHero.png"
            alt=""
            className="w-[350px] h-[394px] p-5 object-cover"
          />
        </div>
        <div className="ml-16">
          <h1 className="text-2xl mb-5">Lorem ipsum dolor sit amet.</h1>
          <div className="">
            <p>Nama</p>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="border border-collapse w-full p-2"
            />
            <p className="mt-5">Nomor Hp</p>
            <input
              type="text"
              placeholder="Nomor HP"
              className="border border-collapse w-full p-2"
            />
            <p className="mt-5">Kategori</p>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="flex flex-row justify-between text-sm font-light text-border border border-collapse w-full p-2"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Sub Kategori
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
            <p className="mt-5">Sub Kategori</p>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="flex flex-row justify-between text-sm font-light text-border border border-collapse w-full p-2"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Sub Kategori
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
          <div className="pt-5">
            <Button title="Submit" className="bg-primary text-light" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
