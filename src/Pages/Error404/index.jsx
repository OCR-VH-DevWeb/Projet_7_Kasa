import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className="global">
      <h1 className="object">404</h1>
      <p className="message">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="linkback" to="/">
        <p className="backhome">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  )
}

export default Error404

// {/* <div className="global">
// < className="object">404</h1>
// <h2 className="message">Oups! La page que vous demandez n'existe pas.</h2>
// <Link className="linkback" to="/">
// <h3 className="backhome">Retourner sur la page d'accueil</h3>
// </Link>
// </div> */}
