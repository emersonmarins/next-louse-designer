// SPDX-License-Identifier: MIT

import Card from "../components/card/card";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import Presentation from "../components/presentation/presentation";
import ContentPostInsta from "@/components/textCarouselPostInsta/textCarouselPostInsta";
import Image from "next/image";
import Plan01 from "/public/planos01.png"
import Plan02 from "/public/planos02.png"


const packageCards = [
  {
    name: 'Design',
    line: 'Cada Design',
    price: '120,00',
    currentPrice: '97,99',
    bg: 'design',
    options: {
      pers: 'Personalização Individual',
      ident: 'Identidade Visual',
      colors: 'Cores Personalizadas',
      estil: '5 Opções De Estilização',
    }
  },
  {
    name: 'Plano Essencial',
    line: 'Plano Mensal',
    price: '499,99',
    currentPrice: '297,99',
    bg: 'essenc',
    options: {
      pers: 'Personalização Individual',
      ident: 'Identidade Visual',
      colors: 'Cores Personalizadas',
      estil: '5 Opções De Estilização',
      visit: 'Cartão de visita',
      banner: 'Banner para redes sociais',
      art: '1 arte para post por semana',
    }
  },
  {
    name: 'Plano Avançado',
    line: 'Plano Mensal',
    price: '1499,97',
    currentPrice: '987,99',
    bg: 'advance',
    options: {
      pers: 'Personalização Individual',
      ident: 'Identidade Visual',
      colors: 'Cores Personalizadas',
      estil: '5 Opções De Estilização',
      visit: 'Cartão de visita',
      banner: '2 Banner para redes sociais',
      art: '3 artes para post por semana',
    }
  }, {
    name: 'Plano Premium',
    line: 'Plano Mensal',
    price: '2299,99',
    currentPrice: '1999,99',
    bg: 'premium',
    options: {
      pers: 'Personalização Individual',
      ident: 'Identidade Visual',
      colors: 'Cores Personalizadas',
      estil: '5 Opções De Estilização',
      visit: 'Cartão de visita',
      banner: '3 Banner para redes sociais',
      art: '5 artes para post por semana',
      asses: 'Assessoria em design',
    }
  }
]
export default function Home() {
  return (

    <div className="m-auto">

      <div className="mt-40 max-lg:mt-48 max-sm:mt-36"></div>
      <Presentation />
      <ContentPostInsta />
      <div className="flex flex-col flex-wrap gap-8 px-8 w-full overflow-hidden">
        <div className="flex flex-row-reverse pt-20 mb-20 gap-20 w-full max-w-[1500px] m-auto relative
          overscroll-x-none max-lg:flex-col-reverse
          before:content-[''] before:h-full before:w-[220vw] before: before:absolute before:-left-[100vw] 
          before:right-0 before:top-0 before:bg-neutral-100 before:-z-10 before:shadow-sm
        ">
          <Image src={Plan02} height={1000} width={1200} alt="Pessoas fechando negocio"
            className="w-[600px] 2lg:w-[500px] 2lg:h-auto"
          ></Image>
          <div className="flex flex-col w-1/2 lg:w-11/12">
            <div className="max-w-[650px] w-full overflow-hidden">
              <h1 className="
                  opacity-0 animate-showElementSlide [font-size:var(--step-4)] text-slate-800 font-quicksand font-extrabold
                  leading-tight tracking-normal capitalize
                  "
              >Conheça nossos planos&nbsp;
                <span className="[font-size:var(--step-4)] text-[#00d9a6]">
                  Mensais
                </span>
              </h1>
            </div>
            <div className="
                presentation__left-line flex flex-row gap-4 h-12 items-center w-24
                "
            >
              <span className="
                  h-1 bg-gradient-linear rounded-3xl w-[20%]
                  "
              ></span>
              <span className="
                  h-1 bg-gradient-linear rounded-3xl w-[60%]
                  "
              ></span>
            </div>
            <div className="">
              <p className="
                  text-sm font-ubuntu font-light text-zinc-400 opacity-0 animate-showElement
                  max-w-[600px] max-project-lg:max-w-[400px]
                  "
              >Planos que cabem no seu bolso, caso tenha outras necessidades entre em contato com nosso suporte e
                fazemos um plano personalizado para sua igreja.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 m-auto max-w-[1500px] w-full">
          {packageCards.map((itemCard, index) => (
            <Card options={itemCard} key={index} />
          ))
          }
        </div>
      </div>

    </div>
  )
}