import Search from "./search";
import NavMobile from "./navMobile";

export default function NavDeskMob() {
  return(
    <nav className="flex items-center justify-center grow">
      <ul className="list-none flex items-center justify-center gap-5 grow-[2] max-sm:hidden">
        <li className="text-neutral-700"><a href="#" className="">Home</a></li>
        <li className="text-neutral-700"><a href="#" className="">Sobre Nós</a></li>
        <li className="text-neutral-700"><a href="#" className="">Nossos Serviços</a></li>
        <li className="text-neutral-700"><a href="#" className="">Contato</a></li>
      </ul>
      <Search/>
      <NavMobile/>
    </nav>
  )
}