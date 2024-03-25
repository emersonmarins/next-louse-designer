import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { TextSpan } from "../elements/text"

export default function Card(options: any) {
  const currentBackground = () => {
    if (options.options.bg === "design") return 'bg-gradient-card-design';
    if (options.options.bg === "essenc") return 'bg-gradient-card-essenc';
    if (options.options.bg === "advance") return 'bg-gradient-card-advance';
    if (options.options.bg === "premium") return 'bg-gradient-card-premium';
  }
  return (
    <div className={`min-w-[17rem] max-w-[22rem] w-[18rem] shadow-2xl relative mb-24 h-[570px] text-center rounded-3xl m-auto ${currentBackground()}`}>
      <div className="h-1"></div>
      <div className="flex flex-col py-7 mt-4 bg-zinc-50">
        <TextSpan className={"text-[1.7rem] text-[#272727] capitalize font-semibold"}>{options.options.name}</TextSpan>
        <TextSpan className={"text-[0.9rem] text-[#676767] capitalize font-normal"}>{options.options.line}</TextSpan>
      </div>
      <div className="flex flex-col pt-2 justify-center items-center">
        <div>
          <TextSpan className={"text-[0.7rem] text-[#eee] capitalize font-semibold"}>R$</TextSpan>
          <TextSpan className={"text-[1.4rem] text-[#eee] capitalize font-thin line-through"}>{options.options.price}</TextSpan>
        </div>
        <div>
          <TextSpan className={"text-[1.4rem] text-[#eee] capitalize font-thin"}>R$</TextSpan>
          <TextSpan className={"text-[3.1rem] text-[#eee] capitalize font-thin"}>{options.options.currentPrice}</TextSpan>
        </div>
      </div>
      <div className="flex flex-grow flex-col gap-3 pl-10 py-10 justify-center w-full h-auto rounded-b-3xl bg-zinc-50 absolute -bottom-1 left-0 right-0 top-1/2">
        <div className="flex flex-row items-center gap-7 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <TextSpan>{options.options.options.pers}</TextSpan>
        </div>
        <div className="flex flex-row items-center gap-7 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <TextSpan>{options.options.options.ident}</TextSpan>
        </div>
        <div className="flex flex-row items-center gap-7 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <TextSpan>{options.options.options.colors}</TextSpan>
        </div>
        <div className="flex flex-row items-center gap-7 h-7">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
          <TextSpan>{options.options.options.estil}</TextSpan>
        </div>
        {options.options.options.visit ? (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
            <TextSpan>{options.options.options.visit}</TextSpan>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faX} className="w-3 h-auto text-red-500" />
            <TextSpan>Cartão De Visita</TextSpan>
          </div>
        )
        }
        {options.options.options.banner ? (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
            <TextSpan>{options.options.options.banner}</TextSpan>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faX} className="w-3 h-auto text-red-500" />
            <TextSpan>Banner Para Redes Sociais</TextSpan>
          </div>
        )
        }
        {options.options.options.art ? (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-auto" />
            <TextSpan>{options.options.options.art}</TextSpan>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-7 h-7">
            <FontAwesomeIcon icon={faX} className="w-3 h-auto text-red-500" />
            <TextSpan>Arte Para Post Por Semana</TextSpan>
          </div>
        )
        }
      </div>
    </div>
  )
}