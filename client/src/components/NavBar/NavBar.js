import React from 'react'


class Navbar extends React.Component{
    
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/allheroes">All Heroes</a></li>
                <li><a href="/allusers">All Users</a></li>
                <li><a href="/">About</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar