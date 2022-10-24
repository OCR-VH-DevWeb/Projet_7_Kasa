import { Link } from "react-router-dom"

function Error404() {
  return (
    <div className="global">
      <h1 className="main">404</h1>
      <h2 className="message">Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="linkback" to="/">
      <h3 className="backhome">Retourner sur la page d'accueil</h3>
      </Link>
    </div>
  )
}

export default Error404
