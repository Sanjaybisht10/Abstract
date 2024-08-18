import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black text-light px-5 py-4">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">Abstract | Help Center</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end px-5" id="navbarText">
                <Link to={'/AddCard'}>
                    <button type="button" className="btn btn-dark px-5 border border-light">Add A Card</button>
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar