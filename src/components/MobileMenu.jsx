import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <section className="flex xl:hidden w-full p-5 bg-white shadow-lg justify-between items-center">
      <div>
        <h2 className="font-bold text-xl mb-2">Painel de Controle</h2>
        <p className="font-normal text-[#555555]">Administrador</p>
      </div>

      <Menu size={28} cursor={"pointer"} />
    </section>
  );
}
