"use client"
import CarouselPostInsta from "../carouselPostInsta/carouselPostInsta";
import Line from "../elements/line";
import Text from "../elements/text";
import Title from "../elements/title";
import TextSpecial from "../elements/especialText";
import Button from "../button";

const textParagraf = `Design que se conecta com sua imagem visual`;

const title = `Nossos post para Instagran`;

export default function ContentPostInsta() {
  return (
    <div>
      <section className="presentation py-20 flex flex-wrap gap-10 tw-max-w-1500 justify-between mt-16 mx-auto pl-10 max-project-lg:flex-col max-project-lg:px-5" >
        <div className="presentation__left flex flex-col w-auto gap-4 max-project-lg:w-full" >
          
          <TextSpecial options={{ overflow: true, text: 'posts para instagram' }} />
          <div className="flex flex-wrap max-w-[450px] w-full overflow-hidden" >
            <Title options={{ tag: 'h1', text: 'Personalizamos para', tagSpan: 'span', textSpan: 'você' }} />
          </div>
          <Line />
          {/* Description */}
          <Text options={{ tag: 'p', text: textParagraf }} />
          
          <Button options={{text: 'Saiba Mais'}}/>
        
        </div>
        <CarouselPostInsta />
      </section>
    </div>

  )
}