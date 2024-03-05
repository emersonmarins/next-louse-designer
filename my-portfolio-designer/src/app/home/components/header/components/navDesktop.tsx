import Search from "./search";
import NavMobile from "./navMobile";

export default function NavDeskMob() {
  return(
    <nav className="header__nav flex items-center justify-center grow">
      <ul className="header__menu list-none flex items-center justify-center gap-5 grow-[2] sm:hidden">
        <li className="header__menu-item text-base tw-li-item"><a href="#" className="header__menu-link">Home</a></li>
        <li className="header__menu-item text-base tw-li-item"><a href="#" className="header__menu-link">Sobre Nós</a></li>
        <li className="header__menu-item text-base tw-li-item"><a href="#" className="header__menu-link">Nossos Serviços</a></li>
        <li className="header__menu-item text-base tw-li-item"><a href="#" className="header__menu-link">Contato</a></li>
      </ul>
      <Search/>
      <NavMobile/>
    </nav>
  )
}