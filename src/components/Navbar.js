import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg mb-5 py-3 navbar">
        <Link to = '/' className="navbar-brand pl-5"><h1>Jessilin Lugo</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mr-1">
                        <Link to = '/graphicart' className="nav-link">Graphic Art<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mr-1">
                        <Link to = '/webdesign' className="nav-link">Web Design<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mr-1">
                        <Link to = '/textilecrafts' className="nav-link">Textile Crafts<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mr-1">
                        <Link to = '/contact' className="nav-link">Contact<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;