import Banner from '../../components/Banner/index'
import Image from '../../assets/About.png'
import Collapse from '../../components/Collapse/index'
import Data from '../../datas/about.json'


function About() {
  return (
    <div className='main'> 
      <Banner image={Image} />
      <ul className='containing'>
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

