import Image from "next/image";
import imageWorkDesign from "/public/image-work-design.png";
import TextSpecial from "../elements/especialText";
import Button from "../button";

export default function Presentation() {
  return (
      <section className="presentation flex gap-10 tw-max-w-1500 justify-between mt-16 mx-auto pl-10 max-project-lg:flex-col max-project-lg:px-5">
        <div className="presentation__left flex flex-col w-1/2 gap-4 max-project-lg:w-full">
          <TextSpecial options={{overflow: true, text: '10 anos de experiençia'}}/>
          <div className="presentation__left-title max-w-[400px] w-full overflow-hidden">
            <h1 className="
              opacity-0 animate-showElementSlide text-5xl text-slate-800 font-quicksand font-extrabold 
              leading-tight tracking-normal capitalize
              "
            >Nós somos uma agencia de web <br/>
              <span className="
                presentation__left-title--is-color text-[2.7rem] text-[#00d9a6]  
                "
              >design
              </span>
            </h1>
          </div>
          <div className="
            presentation__left-line flex flex-row gap-4 h-12 items-center w-24
            "
          >
            <span className="
              h-2 bg-gradient-linear rounded-3xl w-[20%]
              "
            ></span>
            <span className="
              h-2 bg-gradient-linear rounded-3xl w-[60%]
              "
            ></span>
          </div>
          <div className="presentation__left-description">
            <p className="
              text-sm font-ubuntu font-light text-zinc-400 opacity-0 animate-showElement 
              max-w-[600px] max-project-lg:max-w-[400px] 
              "
            >Com mais de 10 anos de experiência, somos especialistas em design e desenvolvimento web. Criamos logos
              impactantes, banners e flyers que destacam a sua marca. Além disso, cuidamos de todas as postagens e
              gerenciamento das suas redes sociais. Nossos websites são feitos sob medida para o seu negócio, e nossos
              aplicativos exclusivos atendem às suas necessidades específicas. Se você procura um serviço de design
              completo e inovador, nós temos a solução perfeita para você. Entre em contato conosco e descubra como
              podemos transformar a sua presença online.
            </p>
          </div>
          <Button options={{text: 'Saiba Mais'}}/>
        </div>
        <div className="presentation__right h-auto w-auto max-project-lg:w-full">
          <Image
            className="presentation__right-img h-full object-cover animate-showElement"
            src={imageWorkDesign}
            alt="designer trabalhando"
            width={500}
            height={500}
            
          />
        </div>
      </section>
  )
}