import React from "react";

const Navbar = props => {
return (
<div className="nav-top"> 
    <div className="home-button">
    <h3>Clicky Game</h3>
    </div>
    <div className="nav-instructions">
    <h3>Click and image to begin!</h3>
    </div>
    <div className="nav-score">
    <h3>Score: {props.score} | Top Score: X</h3>
    </div>
    
</div>
)
}

export default Navbar;

