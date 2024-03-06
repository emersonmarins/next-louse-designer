import Line from "../elements/line";
import Text from "../elements/text";
import Title from "../elements/title";
import Logo from "../header/components/logo";
import MapComponent from "../map";

export default function Footer() {
  return (


    <div className="flex flex-wrap w-full relative max-sm:flex max-sm:gap-7" >

      {/* Col-1 About */}
      <div className="flex flex-col gap-4 px-10">
        <Logo options={{ width: '250px' }} />
        <Text options={{ tag: 'p', text: 'Uma empresa focada em trazer soluções de design e soft', fontFamily: true, fontSize: '1', color: '#373737' }} />
      </div>

      {/* Col-2 Links */}
      <div className="flex flex-col pl-10 gap-3">
        <Title options={{ tag: 'h4', text: 'links rápdos' }} />
        <Line />
        <Text options={{ tag: 'p', text: 'Sobre nós', fontFamily: true, fontSize: '1', color: '#373737' }} />
        <Text options={{ tag: 'p', text: 'Contato', fontFamily: true, fontSize: '1', color: '#373737' }} />
        <Text options={{ tag: 'p', text: 'Projetos', fontFamily: true, fontSize: '1', color: '#373737' }} />
      </div>

      {/* Col-3 Contact */}
      <div className="flex flex-col px-10 gap-3">
        <Title options={{ tag: 'h4', text: 'Contato', fontFamily: true, fontSize: '1', color: '#373737' }} />
        <Line />
        <Text options={{ tag: 'p', text: 'Valparaíso De Goiáis - Parque Esplana I Rua A Quadra M', fontFamily: true, fontSize: '1', color: '#373737' }} />
        <Text options={{ tag: 'p', text: 'lousesoftdesign@gmail.com', fontFamily: true, fontSize: '1', color: '#373737' }} />
        <Text options={{ tag: 'p', text: '+55 (61) 992291371', fontFamily: true, fontSize: '1', color: '#373737' }} />
      </div>
      
      {/* Col-4 Maps */}
      <div className="pl-10">
        <Title options={{ tag: 'h4', text: 'Localização' }} />
        <Line />
        <div className="w-[calc(100vw_-_80px)] h-56">
          <MapComponent />
        </div>
      </div>

      {/* Footer End */}
      <div className="flex justify-center justify-items-center mx-auto items-center h-24 mt-24 after:bg-[linear-gradient(to_right,#373737,_#171717)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-24 after:-z-10 ">
        <Text options={{ tag: 'span', text: 'LOUSE SOFT DESIGN  - TODOS OS DIREITOS RESERVADOS',fontFamily: true ,fontSize: '0.7', color: '#777777' }} />
      </div>

    </div>
  )
}