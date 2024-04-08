import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import React from 'react';
import VistaCardsGuardadas from '../../../UsuarioLogged/VistaCardsGuardadas';
import NavbarUsuario from '../navbarUsuario';

const MiPerfil = () => {
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const InicialesUsuario = localStorage.getItem("inicialesUsuario");
    const correoUsuario = localStorage.getItem("correoUsuario");
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const nombreCompleto = localStorage.getItem("nombreCompleto");


    return (
        <section id='homeRecetas'>

            <NavbarUsuario />

            <div className='container mx-auto py-4'>
                <div>
                    <div>
                        <h1 className="text-focus-in titulo-inicio py-4">Mi perfil</h1>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container xs={12} md={7} lg={8} spacing={4}>
                                <Avatar
                                    sx={{ width: 56, height: 56 }}
                                >{InicialesUsuario}</Avatar>
                                <Grid xs={6} lg={4}>
                                    <Box
                                        id="category-a"
                                        sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                                    >
                                    </Box>
                                    <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                                        <p>
                                            <strong>Correo: </strong> {correoUsuario}
                                        </p>
                                        <p>
                                            <strong>Nombre de Usuario: </strong> {nombreUsuario}
                                        </p>
                                        <p>
                                            <strong>Nombre Completo: </strong> {nombreCompleto}
                                        </p>
                                    </Box>
                                </Grid>
                                <Grid container xs={12} md={7} lg={12} spacing={4}>
                                    <Grid xs={6} lg={10}>
                                        <Item>
                                            <Box
                                                id="category-b"
                                                sx={{ fontSize: '12px', textTransform: 'uppercase', textAlign: 'left' }}
                                            >
                                                Recetas Guardadas
                                            </Box>
                                            <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                                                {/* Cards */}
                                                <VistaCardsGuardadas></VistaCardsGuardadas>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    
                                </Grid>

                            </Grid>
                        </Box>
                    </div>
                </div>
            </div >
        </section>
    );
}

export default MiPerfil;
