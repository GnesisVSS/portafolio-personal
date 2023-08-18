import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { FixedSizeList } from 'react-window';
import { Box } from '@mui/material';
import { IconChefHat } from '@tabler/icons-react';
import { useState } from "react";

const menu = ["Página web de recetas", "prueba"]
const links = ["/RecetasHome", "#"]
console.log(menu.length)


function mostrarImagen() {
    var imagen = document.getElementById('imagen');
    var imagenD = document.getElementById('imagenDefecto');
    // console.log(imagen.)
    imagen.style.display = 'block';
    imagenD.style.display = 'none';
}

function ocultarImagen() {
    var imagen = document.getElementById('imagen');
    var imagenD = document.getElementById('imagenDefecto');
    // console.log(imagen.)
    imagen.style.display = 'none';
    imagenD.style.display = 'block';
}



const show = {
    opacity: 1,
    display: "block"
};

const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
};


const Proyectos = () => {

    function renderRow(props) {
        // eslint-disable-next-line react/prop-types
        const { index, style } = props;

        return (
            <List style={style} key={index} component="div" disablePadding>
                <ListItem alignItems="flex-start" >

                    {/* <ListItemText
                            primary={menu[index]}
                        /> */}

                    {/* <h2 className='titulo-demo'>Web de recetas</h2> */}
                    <h1 style={{ width: '500px' }} >

                        <div className="controls">
                            <IconChefHat width='40px' height='40px' style={{ paddingRight: '10px' }} />
                            <motion.a
                                href={links[index]}
                                whileTap={{ scale: 0.95 }}
                                style={{ textDecoration: 'none' }} className='menuProyectos'
                                onMouseEnter={() => {
                                    setIsVisible(false);
                                    mostrarImagen();
                                }}
                                onMouseLeave={() => {
                                    setIsVisible(true);
                                    ocultarImagen();
                                }}
                            >
                                {menu[index]}
                            </motion.a>
                        </div>
                        {/* <a href={links[index]} style={{ textDecoration: 'none' }} className='menuProyectos' onMouseOver={mostrarImagen} onMouseLeave={ocultarImagen}>
                            {menu[index]}
                        </a> */}
                    </h1>


                </ListItem>
                <Divider variant="inset" component="li" />
            </List>

        );
    }
    const estilo2 = {
        fontSize: '18px'
    }

    const boxVariant = {
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
        hidden: { x: 0, opacity: 0 },
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const [isVisible, setIsVisible] = useState(true);

    return (
        <section id='recetas' style={{ backgroundColor: '#EDE6F1', color: '#162E36' }}>
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}

            >
                <div className='py-5'>
                    <div className="container col-sm-12 py-2 mx-auto">

                        <div className="row justify-content-center">

                            <div className="col-sm-8 col-md-6 p-5 align-self-center">

                                <div className="col" style={{ lineHeight: '27px' }}>
                                    <strong><h1 style={{ textAlign: 'left', color: '#162E36' }} className='h1Proyectos'>Mis proyectos</h1></strong>
                                    <div className='py-4'>
                                        {/* <h2 className='titulo-demo'>Web de recetas</h2>
                                        <p style={estilo2}>
                                            Página web ficticia que permite la visualización de recetas con sus ingredientes, tiempo de preparación, detalle, porciones, dificultad y categoría; Ademas de una cuenta de usuario en donde se permite ingresar recetas propias como tambien guardar las que ya vienen para visualizar por defecto y eliminarlas de los elementos guardados cuando se guste.
                                        </p> */}
                                        <div className='py-3' id='iconos'>
                                            {/* <h4>Lenguaje, frameworks y herramientas utilizadas</h4> */}
                                            {/* Icono React */}
                                            {/* 
                                            <FormControlLabel
                                                control={<Switch checked={checked} onChange={handleChange} />}
                                                label="Show"
                                            />
                                            <Box sx={{ display: 'flex' }}>
                                            
                                                
                                                <Grow
                                                    in={checked}
                                                    style={{ transformOrigin: '0 0 0' }}
                                                    {...(checked ? { timeout: 1000 } : {})}
                                                >
                                                    <IconBrandReact width='50px' height='50px' style={{ color: '#61DBFB', margin: '18px', backgroundColor: 'white', borderRadius: '15px' }} />
                                                </Grow>
                                            </Box> */}
                                            <Box
                                                sx={{ width: '100%', height: 400, maxWidth: 500, bgcolor: 'none' }}
                                            >
                                                <FixedSizeList
                                                    height={400}
                                                    width={500}
                                                    itemSize={80}
                                                    itemCount={menu.length}
                                                    overscanCount={5}
                                                >
                                                    {renderRow}
                                                </FixedSizeList>

                                            </Box>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* 
                            <div className="controls">
                                <motion.a
                                    whileTap={{ scale: 0.95 }}
                                    onMouseEnter={() => setIsVisible(!isVisible)}
                                    onMouseLeave={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? "Hide" : "Show"}
                                </motion.a>
                            </div> */}
                            <div className='col-sm-6 col-md-6  align-self-center' >
                                <motion.div animate={isVisible ? hide : show} >
                                    <div className="col">
                                        <img src='/img/Shawarma.gif' style={{ borderRadius: '40px', height: '600px', width: '600px' }} id='imagen' />
                                    </div>
                                </motion.div>
                                <motion.div animate={isVisible ? show : hide} >
                                    <div className="col">
                                        <img src='/img/proyectos.gif' style={{ borderRadius: '40px', height: '600px', width: '600px' }} id='imagenDefecto' />
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Proyectos;








