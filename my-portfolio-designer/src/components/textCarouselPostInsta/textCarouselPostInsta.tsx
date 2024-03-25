"use client"
import CarouselPostInsta from "../carouselPostInsta/carouselPostInsta";
import Line from "../elements/line";
import { TextP } from "../elements/text";
import Title from "../elements/title";
import TextSpecial from "../elements/especialText";
import Button from "../button";
const styles ={
  packageContent: "font-light text-neutral-500 text-[1rem]",
}

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
          <div className="flex flex-col gap-5">
            <TextP className={styles.packageContent}>
              • Comunicam a mensagem da sua igreja com clareza e impacto.
            </TextP>
            <TextP className={styles.packageContent}>
              • Transmitem profissionalismo e seriedade, elevando a percepção da sua comunidade.
            </TextP>
            <TextP className={styles.packageContent}>
              • Conectam-se com o público de forma autêntica e memorável.
            </TextP>
            <TextP className={styles.packageContent}>
              • Fortalecem a marca da sua igreja e a distinguem da concorrência.
            </TextP>
          </div>
          <Button options={{ text: 'Saiba Mais' }} />
        </div>
        <CarouselPostInsta />
      </section>
    </div>

  )
}