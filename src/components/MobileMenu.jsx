import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const menuItems = [
    { label: "Visão Geral", href: "/" },
    { label: "Encontros", href: "/encontros" },
    { label: "Peneiras", href: "/peneiras" },
    { label: "Copa", href: "/copa" },
    { label: "História", href: "/historia" },
    { label: "Sobre", href: "/sobre" },
    { label: "Usuários", href: "/usuarios" },
  ];

  return (
    <section className="flex xl:hidden w-full p-5 bg-white shadow-lg justify-between items-center">
      <div>
        <h2 className="font-bold text-xl mb-2">Painel de Controle</h2>
        <p className="font-normal text-[#555555]">Administrador</p>
      </div>

      <Menu
        className="ml-auto"
        onClick={toggleMenu}
        size={28}
        strokeWidth={1}
        cursor={"pointer"}
      />

      <div>
        <div
          onClick={() => toggleMenu()}
          className={`bg-black opacity-60 w-[100vw] h-[100vh] fixed z-19 top-0 left-0 ${
            opened ? "flex" : "hidden"
          }`}
        ></div>

        <div
          className={`w-[75vw] pb-40 h-screen overflow-y-auto bg-white fixed z-30 top-0 right-0 shadow-xl flex flex-col transform transition-transform duration-300 ${
            opened ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
            <span className="text-xl font-semibold text-gray-800">Menu</span>
            <button onClick={toggleMenu}>
              <X
                size={28}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              />
            </button>
          </div>

          <nav className="flex flex-col px-6 mt-4 space-y-2">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="py-4 text-lg text-gray-700 border-b border-gray-100 hover:text-purple-700 active:pl-2 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  const url = e.currentTarget.getAttribute("href");
                  setTimeout(() => {
                    window.location.href = url;
                  }, 400);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
