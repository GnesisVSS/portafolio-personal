/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import NavbarUsuario from '../navbarUsuario';
import FormIngredientes from './FormIngredientes';

const FormRecetas = (props) => {

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    const [page, setPage] = React.useState(true);

    
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
                        <FormIngredientes />
                    </div>
                    {/* <Stack spacing={2}>
                        <Pagination count={2} page={page} onChange={handleChange} />
                    </Stack> */}


                </div>

            </div>

        </section>


    )
}

export default FormRecetas
