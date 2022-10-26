function Userprofile(host, rating) {
 return (
    <div className="userProfile">
        <h2 className="userName">{host.className}</h2>
        <img className="userAvatar" src={host.picture} alt="Avatar de profil d'utilisateur"></img>
        <div className="UserRate">

        </div>    
    </div>
    
 )
}




export default Userprofile