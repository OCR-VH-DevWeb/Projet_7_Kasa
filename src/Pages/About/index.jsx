import Banner from '../../components/Banner'
import Image from '../../assets/About.png'
import Collapse from '../../components/Collapse'
import Data from '../../datas/about.json'


function About() {
  return (
    <div className='main'> 
      <Banner image={Image} />
      <ul >
          {Data.map((rules, index) => (
            <li key={index}>
              <Collapse category={rules.category} content={rules.content} />
            </li>
          ))}
        </ul>

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
