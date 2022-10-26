import Banner from '../../components/Banner/index'
import Image from '../../assets/Home.png'
import Accomodations from '../../datas/products.json'
import Card from '../../components/Card/index'

function Home() {
  return (
    <div>
      <Banner image={Image} text="Chez vous, partout et ailleurs" />
      <div className="container">
        <ul className="product">
          {Accomodations.map((Accomodation) => (
            <li key={Accomodation.id}>
              <Card cover={Accomodation.cover} title={Accomodation.title} id={Accomodation.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Home