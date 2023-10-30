import React, { useEffect, useState } from 'react';
import NavbarUsuario from '../ElementosRecetas/Navs/navbarUsuario';
import FormIngredientesAdmin from './FormIngredientesAdmin';

const FormRecetasAdmin = (props) => {
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    const [values, setValues] = useState(() => {
        const storedValues = localStorage.getItem('formValues');
        return storedValues ? JSON.parse(storedValues) : [];
    });

    useEffect(() => {
        localStorage.setItem('formValues', JSON.stringify(values));
    }, [values]);


    return (
        <section>
            <NavbarUsuario />
            {/* <p>prueba</p> */}
            <div className='container mx-auto py-5' >
                <div className="card border-dark py-4">
                    <div className="card-body text-dark">
                        {/* <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p> */}
                        <FormIngredientesAdmin />
                    </div>
                    {/* <Stack spacing={2}>
                        <Pagination count={2} page={page} onChange={handleChange} />
                    </Stack> */}


                </div>

            </div>

        </section>


    )
}

export default FormRecetasAdmin;
