import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './../css/styles.css';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/RickYMorty">Todos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/MisFavoritos">Favoritos <FavoriteIcon/></a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
