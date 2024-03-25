import { TextSpan, TextP } from "../elements/text";
import Title from "../elements/title";
import Logo from "../header/components/logo";
import MapComponent from "../map";

export default function Footer() {

  return (
    <div className="w-full relative">
      <div className="flex flex-wrap w-full max-sm:flex max-sm:gap-7 max-w-[1500px] m-auto" >
        {/* Col-1 About */}
        <div className="flex flex-col pt-4 gap-4 max-w-72 px-10">
          <Logo options={{ width: '250px' }} />
          <TextP className={"text-[#373737] text-[1rem] font-sans"}>Uma empresa focada em trazer soluções de design e soft</TextP>
        </div>
        {/* Col-2 Links */}
        <div className="flex flex-col pl-10 gap-3">
          <Title options={{ tag: 'h4', text: 'links rápdos' }} />
          <TextP className={"text-[#373737] text-[1rem] font-sans"}>Sobre nós</TextP>
          <TextP className={"text-[#373737] text-[1rem] font-sans"}>Contato</TextP>
          <TextP className={"text-[#373737] text-[1rem] font-sans"}>Projetos</TextP>
        </div>
        {/* Col-3 Contact */}
        <div className="flex flex-col max-w-72 px-10 gap-3">
          <Title options={{ tag: 'h4', text: 'Contato', fontFamily: true, fontSize: '1', color: '#373737' }} />
          <TextP className={"text-[#373737] text-[1rem] font-sans"}>Valparaíso De Goiáis - Parque Esplana I Rua A Quadra M</TextP>
          <TextP className={"text-[#373737] text-[1rem] font-sans"}>lousesoftdesign@gmail.com</TextP>
          <TextP className={"text-[#373737] text-[1rem] font-sans"}>+55 (61) 992291371</TextP>
        </div>
        {/* Col-4 Maps */}
        <div className="grow px-10">
          <Title options={{ tag: 'h4', text: 'Localização' }} />
          <div className="w-full h-52 pt-7 ">
            <MapComponent />
          </div>
        </div>
      </div>
      {/* Footer End */}
      <div className="flex justify-center justify-items-center mx-auto items-center h-20 mt-24 after:bg-[linear-gradient(to_right,#373737,_#171717)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-20 after:-z-10 ">
        <TextSpan className={"text-[#777777] text-[0.7rem] font-sans font-medium"} >
          LOUSE SOFT DESIGN  - TODOS OS DIREITOS RESERVADOS
        </TextSpan>
      </div>
    </div>
  )
}