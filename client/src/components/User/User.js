const User = ({user}) => {

    return(
        <div id="userinfo">
            <p>{user.name}</p>
            <p>{user.hero.name}</p>

        </div>
    )
}

export default User;