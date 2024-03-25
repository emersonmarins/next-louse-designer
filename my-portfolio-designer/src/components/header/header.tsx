import Logo from "./components/logo"
import NavDeskMob from "./components/navDesktop"

export default function Header() {
  return (
    <header className=" header-wrapper w-full h-24 fixed top-0 z-10 after:content-[''] after:fixed after:top-0 after:left-0 after:bg-white after:right-0 after:h-24  after:shadow-md after:-z-10 max-lg:after:h-36 max-lg:p-3 max-sm:after:h-28 max-sm:pt-0 ">
      <div className=" header max-w-[1500px] w-full h-full text-emerald-500 flex justify-between items-center pl-5 pr-5 m-auto max-lg:flex-col max-lg:pl-7 max-lg:pr-7 max-lg:h-auto max-lg:gap-9 max-sm:flex-row max-sm:justify-between max-sm:p-7 max-sm:pb-9 max-sm:pt-9 max-sm:gap-9">

        <a href="#" className="header__logo">
          <Logo options={{width: null}}/>
        </a>
        <NavDeskMob />
      </div>
    </header>
  )
}