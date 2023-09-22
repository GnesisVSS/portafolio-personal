import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './../css/styles.css';

const Nav = () => {
    return (
        <div>
            <nav id='navbar' className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '20px' }}>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                                <li className="nav-item text-start">
                                    <a className="nav-link" aria-current="page" href="/RickYMorty">Todos</a>
                                </li>
                                <li className="nav-item text-start">
                                    <a className="nav-link" href="/MisFavoritos">Favoritos <FavoriteIcon /></a>
                                </li>

                            </ul>
                            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                                <li className="nav-item text-start">
                                    <a className="nav-link" aria-current="page" href="/">Volver al Portafolio</a>
                                </li>
                            </ul>
                            {/* <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-success" type="submit">Search</button>
                            </form> */}

                        </div>
                    </div>
                </div>

            </nav >
        </div >
    );
}

export default Nav;
