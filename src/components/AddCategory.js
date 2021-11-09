import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {//aqui recibe la funcion del componente GifExpertApp
    const [inputValue, setInput] = useState('');//si el useState se queda vacio retorena undefined

    const inputChange = (e) => {//funcion para cambiar el valor del input
        setInput(e.target.value);
    };

    const manejaEnter = (e) => {//funcion para detectar el enter y agregar la categoria nueva al array
        e.preventDefault();//evita el refresh del evento submit
        if (inputValue.trim().length > 2) {
            setCategorias(categoriass => [inputValue, ...categoriass]);
            setInput('');
        }
    };

    return (//lo que se renderiza en el HTML del componente
        <form onSubmit={manejaEnter}>
            <input
                type="text"
                value={inputValue}
                onChange={inputChange}
            />
        </form>
    )

};

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}