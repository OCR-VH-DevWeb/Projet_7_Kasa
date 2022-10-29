import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className="global">
      <h1 className="object">404</h1>
      <p className="message">
        Oups! La page que <br /> vous demandez n'existe pas.
      </p>
      <Link className="linkback" to="/">
        <p className="backhome">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  )
}

export default Error404
