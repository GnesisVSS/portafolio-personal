import React from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

const NavbarUsuario = () => {
    const InicialesUsuario = localStorage.getItem("inicialesUsuario");

    const settings = ['Mi perfil', 'Guardados','Mis recetas' , 'Cerrar Sesión'];
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [selectedIndex, setSelectedIndex] = React.useState();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log(index)

        if(index===0){
            // redirigir a pagina de perfil con toda la info del usuario mas sus recetas guardadas(vista previa) 
            // y sus recetas ingresadas
            window.location.href = '/miPerfil';
        }else if(index===1){
            window.location.href = '/misGuardados';
        }else if(index===2){
            window.location.href = '/misRecetas';
        }else if(index===3){
            localStorage.removeItem("nombreUsuario");
            localStorage.removeItem("inicialesUsuario");
            localStorage.removeItem("correoUsuario");
            localStorage.removeItem("recetasUsuario");
            window.location.href = '/RecetasHome';
        }else{
            console.log("Algo salio mal!")
        }
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <section>
            <div className='py-4'>
                <nav className="navbar navbar-expand-lg sticky-top" id="navbarRecetas" style={{ padding: '20px' }}>
                    <div className="container">
                        <a className="navbar-brand" id="nav-titulo"  >
                            <img src="img/sombrero-de-cocinero.png" id="port" width="35" height="35" />

                        </a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="  collapse navbar-collapse  " id="navbarNav">
                            <ul className="navbar-nav text">
                                <li className="nav-item ">
                                    <strong><a className="nav-link" style={{ color: " #3a3228" }} id="nav-recetas" href="/HomeUsuario">Home</a></strong>
                                </li>

                            </ul>
                            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                                <li className="nav-item px-5">
                                    <a className="nav-link" style={{ color: "#60513f" }} id="nav-recetas" href="/#Home">Volver al portafolio</a>
                                </li>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar >{InicialesUsuario}</Avatar>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting, index) => (
                                            <MenuItem key={setting} onClick={(event) => handleMenuItemClick(event, index)} selected={index === selectedIndex}>{setting} 
                                                <Typography textAlign="center"> </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

        </section>

    );
}

export default NavbarUsuario;
