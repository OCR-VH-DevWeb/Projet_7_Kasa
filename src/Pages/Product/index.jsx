import Details from '../../datas/products.json'
import Caroussel from '../../components/Caroussel'
import { useParams, Navigate } from 'react-router-dom'
import Collapse from '../../components/Collapse/index'
import Tag from '../../components/Tag'
import User from '../../components/User'
import Rating from '../../components/Rating'

function Product() {
  //récupère les paramètres dans URL
  const params = useParams()
  //comparer les id dans params Url
  const product = Details.find((data) => data.id === params.idProduct)
  // si l'id est différent redirection sur page Error404
  if (!product) {
    return <Navigate to="/Error404" />
  }
  console.log(product)

  return (
    <div className="main-product">
      <Caroussel pictures={product.pictures} />
      <section className="product-heading">
        <h1 className="product-heading__name">{product.title}</h1>
        <h2 className="product-heading__location">{product.location}</h2>
        <div className="product-heading__tags">
          <Tag tags={product.tags} />
        </div>
      </section>
      <div className="user">
        <User name={product.host.name} picture={product.host.picture} />
        <Rating number={product.rating} />
      </div>
      <Collapse category="Description" content={product.description} />
      <Collapse category="Équipements" content={product.equipments} />
    </div>
  )
}

export default Product
