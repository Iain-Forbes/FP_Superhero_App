import React from 'react'


class Navbar extends React.Component{
    
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/heroes">All Heroes</a>
                <a class="nav-item nav-link" href="/">Home</a>
                <a class="nav-item nav-link" href="/users">All Users</a>
             </div>
            </div>
         </nav>
            // <nav className="navbar navbar-dark bg-dark">
            //   <ul className="navbar-nav">
            //     <li className="nav-item active">
            //         <a className="nav-link" href="/">Home</a>
            //         </li>
            //     <li class='nav-item'>
            //         <a lassName="nav-link" href="/heroes">All Heroes</a>
            //         </li>
            //     <li class='nav-item'>>
            //         <a lassName="nav-link" href="/users">All Users</a>
            //     </li>
            //   </ul>
            // </nav>
        );
    }
}

export default Navbar