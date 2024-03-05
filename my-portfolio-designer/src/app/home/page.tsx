import Card from "./components/card/card";
import CarouselPostInsta from "./components/carouselPostInsta/carouselPostInsta";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Presentation from "./components/presentation/presentation";
import ContentPostInsta from "./components/textCarouselPostInsta/textCarouselPostInsta";

export default function Home() {
  return (
    <div className="m-auto">
      <Header/>
      <div className="mt-40 max-lg:mt-48 max-sm:mt-36"></div>
      <Presentation/>
      <ContentPostInsta/>
      <Card/>
      <Footer/>
    </div>
  )
}