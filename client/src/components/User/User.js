const User = ({name, heroes}) => {

    return(
        <div id="userinfo">
            <p>{name}</p>
            <p>{heroes}</p>

        </div>
    )
}

export default User;