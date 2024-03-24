import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import Text from "../elements/text"

export default function Card(options: any) {
  console.log(options.options.name)
  const currentBackground = () => {
    if (options.options.bg === "design") return 'bg-gradient-card-design';
    if (options.options.bg === "essenc") return 'bg-gradient-card-essenc';
    if (options.options.bg === "advance") return 'bg-gradient-card-advance'; 
    if (options.options.bg === "premium") return 'bg-gradient-card-premium'; 
 }
  return (
    <div className={`min-w-[17rem] max-w-[22rem] w-[18rem] shadow-2xl relative mb-24 h-[570px] text-center rounded-3xl m-auto ${currentBackground()}`}>
      <div className="h-1"></div>
      <div className="flex flex-col gap-2 py-7 mt-4 bg-zinc-50">
        <Text options={{ tag: 'span', text: options.options.name, fontSize: '1.7', color: "#272727", textTransform: 'capitalize', fontWeight: '600' }} />
        <Text options={{ tag: 'span', text: options.options.line, fontSize: '0.9', color: "#676767", fontWeight: '400' }} />
      </div>
      <div className="flex flex-col pt-7 justify-center items-center gap-4">
        <div>
          <Text options={{ tag: 'span', text: 'R$', fontSize: '0.7', fontFamily: false, color: '#eee' }} />
          <Text className="line-through" options={{ tag: 'span', text: options.options.price, fontSize: '1.4', color: '#eee', fontFamily: false, fontWeight: '100', }} />
        </div>
        <div>
          <Text options={{ tag: 'span', text: 'R$', fontSize: '1.7', fontFamily: false, color: '#eee' }} />
          <Text options={{ tag: 'span', text: options.options.currentPrice, fontSize: '3.1', color: '#eee', fontFamily: false, fontWeight: '100' }} />
        </div>
        {/* <Text options={{ tag: 'span', text: '/Design', fontSize: '1', color: '#eee' }} /> */}
      </div>
      <div className="flex flex-grow flex-col gap-3 pl-10 py-10 justify-center w-full h-auto rounded-b-3xl bg-zinc-50 absolute -bottom-1 left-0 right-0 top-1/2">
        <div className="flex flex-row items-center gap-7 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <Text options={{ tag: 'span', text: options.options.options.pers }} />
        </div>
        <div className="flex flex-row items-center gap-7 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <Text options={{ tag: 'span', text: options.options.options.ident }} />
        </div>
        <div className="flex flex-row items-center gap-7 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <Text options={{ tag: 'span', text: options.options.options.colors }} />
        </div>
        <div className="flex flex-row items-center gap-7 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <Text options={{ tag: 'span', text: options.options.options.estil }} />
        </div>
        {options.options.options.visit ? (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
            <Text options={{ tag: 'span', text: options.options.options.visit }} />
          </div>
        ) : (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faX} className="w-3 h-auto text-red-500" />
            <Text options={{ tag: 'span', text: 'Cartão De Visita' }} />
          </div>
        )
        }
        {options.options.options.banner ? (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
            <Text options={{ tag: 'span', text: options.options.options.banner }} />
          </div>
        ) : (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faX} className="w-3 h-auto text-red-500" />
            <Text options={{ tag: 'span', text: 'Banner Para Redes Sociais' }} />
          </div>
        )
        }
        {options.options.options.art ? (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
            <Text options={{ tag: 'span', text: options.options.options.art }} />
          </div>
        ) : (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faX} className="w-3 h-auto text-red-500" />
            <Text options={{ tag: 'span', text: 'Arte Para Post Por Semana' }} />
          </div>
        )
        }
      </div>
    </div>
  )
}