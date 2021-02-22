
const User = ({user, onDelete}) => {

    const handleDelete = () => {
        onDelete(user.id)
    }

      const userHeroes = user.heroes.map((userHeroes, index)=>{
        return <li key={index} className="userHeroList">
                {userHeroes.name}
                <img src={userHeroes.heroImg} width="100" height="100"/>
                {userHeroes.slug}
        </li>

    })
        
    return(
        <div id="userinfo">
            <button id="delUserButton" onClick={handleDelete}>🗑 Delete</button>
            <h2>{user.name}</h2>
            {userHeroes}
            <p2></p2>
           

        </div>
    )
}

export default User;