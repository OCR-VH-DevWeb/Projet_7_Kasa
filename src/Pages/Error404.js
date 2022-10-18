function Error404() {
  return (
    <div className="global">
      <h1 className="main">404</h1>
      <h2 className="message">Oups! La page que vous demandez n'existe pas.</h2>
      <a className="linkback" href="./">
        <h3 className="backhome">Retourner sur la page d'accueil</h3>
      </a>
    </div>
  )
}

export default Error404
