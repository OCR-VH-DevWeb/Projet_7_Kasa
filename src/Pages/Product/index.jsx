import Details from "../../datas/products.json";
import Caroussel from "../../components/Caroussel/index";
import { useParams, Navigate } from "react-router-dom";

// import Collapse from "../../components/Collapse/index";
import Tags from "../../components/Tag/index";




function Product() {
    //récupère les paramètres dans URL
    const params = useParams();
    //comparer les id dans params Url
    const product = Details.find(
        (data) => data.id === params.idProduct
    )
    // si l'id est différent redirection sur page Error404
    if(!product) {
        return(
            <Navigate to="/Error404" />
        )
        
    }
    console.log(product);
    return (
        <div className="main">
            <Caroussel pictures={product.pictures}/>
            <section className="presentation">
                <div className="presentation_product">
                    <h1 className="name"></h1>
                    <h2 className="location"></h2>
                </div>
                <div className="presentation_tags">

                </div>
                <div className="presentation_user">
                    {/* <p className="identity">{Details.host.name}</p>
                    <img src={Details.host.picture} alt="Avatar de l'utilisateur"></img> */}
                </div>
                <div className="presentation_rate">
                {/* {Tags.tags} */}
                </div>
            </section>
            {/* <Collapse category={Details.description} content={Details.content}/> */}
        </div>
    )
}

export default Product