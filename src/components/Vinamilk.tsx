import Baner from "./baner"
import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Footer from "./Footer"
export default function VinamilkUI() {
  return (
    <div
      style={{
        color: `rgb(2, 19, 176)`,
        backgroundColor: `rgb(255, 255, 241)`
      }}
    >
      <Baner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  )
}
