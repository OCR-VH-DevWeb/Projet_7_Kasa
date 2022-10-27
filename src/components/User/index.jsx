function User({ name, picture }) {
  return (
    <div className="userProfile">
      <p className="userName">{name}</p>
      <img
        className="userAvatar"
        src={picture}
        alt="Avatar de profil d'utilisateur"
      ></img>
    </div>
  )
}

export default User
