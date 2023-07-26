import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
                <div className="container ">
                    <a className="navbar-brand text-white" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link pe-5" href="#">Home</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link" href="#about-us">Features</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link" href="#download">Download</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link" href="#career">Career</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#findings">Finding</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar