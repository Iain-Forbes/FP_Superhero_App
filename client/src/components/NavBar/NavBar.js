import React from 'react'


class Navbar extends React.Component{
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/home">Home</a>
                <a className="nav-item nav-link active" href="/heroes">All Heroes</a>
                <a className="nav-item nav-link" href="/users">All Users</a>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

             </div>
            </div>
         </nav>
        );
    }
}

export default Navbar