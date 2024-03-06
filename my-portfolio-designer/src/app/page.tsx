import Card from "./components/home/card/card";
import Footer from "./components/home/footer/Footer";
import Header from "./components/home/header/header";
import Presentation from "./components/home/presentation/presentation";
import ContentPostInsta from "./components/home/textCarouselPostInsta/textCarouselPostInsta";

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