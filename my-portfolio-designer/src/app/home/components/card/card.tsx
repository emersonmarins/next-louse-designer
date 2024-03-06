import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Text from "../elements/text"

export default function Card(options: any) {
  return (
    <div className="shadow-2xl relative mb-24 h-[500px] text-center max-w-[700px] max-sm:w-[90%] max-sm:rounded-3xl m-auto bg-[linear-gradient(to_right,_#373737,_#212121)]">
      <div className="h-1"></div>
      <div className="flex flex-col gap-2 py-7 mt-4 bg-zinc-50">
        <Text options={{ tag: 'span', text: 'Design', fontSize: '1.7', color: "#272727", textTransform: 'uppercase', fontWeight: '600' }} />
        <Text options={{ tag: 'span', text: 'Cada Design', fontSize: '0.9', color: "#676767", fontWeight: '400' }} />
      </div>
      <div className="flex py-14 justify-center gap-2">
        <Text options={{ tag: 'span', text: 'R$', fontSize: '1.7', fontFamily: false, color: '#eee' }} />
        <Text options={{ tag: 'span', text: '30', fontSize: '3.7', color: '#eee',fontFamily: false ,fontWeight: '100' }} />
        <Text options={{ tag: 'span', text: '/Design', fontSize: '1', color: '#eee' }} />
      </div>
      <div className="flex flex-grow flex-col gap-3 pl-20 justify-center w-full h-auto rounded-b-3xl bg-zinc-50 absolute -bottom-1 left-0 right-0 top-1/2">
        <div className="flex flex-row gap-2 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <Text options={{ tag: 'span', text: 'Personalização Individual' }}/>
        </div>
        <div className="flex flex-row gap-2 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <Text options={{ tag: 'span', text: 'Identidade visual' }}/>
        </div>
        <div className="flex flex-row gap-2 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <Text options={{ tag: 'span', text: 'Cores Personalizadas' }}/>
        </div>
        <div className="flex flex-row gap-2 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <Text options={{ tag: 'span', text: '5 Opções de Estilização' }}/>
        </div>
      </div>
    </div>

  )
}