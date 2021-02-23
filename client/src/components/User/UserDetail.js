import User from "./User"

const UserDetail = ({user, onDelete}) => {
    if (!user){
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(user.id)
    }


    const userHeroes = user.heroes?.map((userHeroes, index)=>{
        return <li key={index} className="userHeroList">
                {userHeroes.name}
                <img src={userHeroes.heroImg} width="100" height="100"/>
                {userHeroes.slug}
        </li>
     })



return(
    <div className ="userComponent">
        <User user={user}/>
        <p>Hereos:</p>
        <ul>
            {userHeroes}
        </ul>
        <button onClick={handleDelete}>Delete {user.name} 🗑 </button>
    </div>
)
}

export default UserDetail