import Banner from '../components/Banner'
import Image from '../assets/About.png'
import Collapse from '../components/Collapse'

function About() {
  return (
    <div>
      <Banner image={Image} />
      <Collapse />
      <Collapse />
      <Collapse />
      <Collapse />
    </div>
  )
}

export default About

// "équipements"
// {/* <ul className="equipment">
// {Accomodations.map((Accomodation) =>
// (
// <li key={Accomodation.equipements}>
// </li>
// )
// )}
// </ul> */}
