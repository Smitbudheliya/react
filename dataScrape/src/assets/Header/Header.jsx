import React from 'react'
import './Header.css'

function Header({ menuList }) {
    return (
        <>
            
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="image" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    menuList.map((val, i) => {
                                        return (
                                            <li key={i} className="nav-item ">
                                                <a className="nav-link active mx-4" aria-current="page" href="#">{val.title}</a>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                            <form className="d-flex " role="search">
                                <input className="form-control me-3 " type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success me-5" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            




        </>
    )
}

export default Header;
