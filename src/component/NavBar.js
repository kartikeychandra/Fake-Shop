import React from 'react'
import logo from './images/FakeShop.png'
import { Link } from "react-router-dom";
import Hot from './images/hot-icon.png'
export default function NavBar() {
    return (
        <>
            <div>
                    <nav className="navbar navbar-expand-lg bg-transparent  d-flex justify-content-center position-absolute" id='navbar'>
                        <div className="container" id='nav-container'>
                            <Link className="navbar-brand mx-3" id='logo' to="/"><img src={logo} title="FakeShop" alt="FakeShop"/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase fw-bold">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-dark " aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                    <img src={Hot} alt="icon items" width="1" height="1" id='hot'/>
                                        <Link className="nav-link active text-dark" aria-current="page" to="/items">Latest Products </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-dark" aria-current="page" to="/">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-dark" aria-current="page" to="/">Contact Us</Link>
                                    </li>
                                </ul>
                                <div className="icons w-100px" id='icons'>
                                    <Link to='' className="btn btn-outline-none fs-3" id='user' >
                                    <i className="fa-solid fa-user"  ></i>
                                    </Link>
                                    <Link to='' className="btn btn-outline-none fs-3" id='cart'>
                                    <i className="fas fa-shopping-cart" ></i>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                
    </>
    )
}
