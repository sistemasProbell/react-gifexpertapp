// import React, { Fragment, useState } from 'react';
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifRes } from './components/GiftRes';

const GifComponent = () => {
    const [categorias, setCategorias] = useState(['Dragon Ball']);
    // const agregaCategoria = () => {//setCategorias( o como se llame, en realidad es la segunda fucion que retorna el usestate) se utiliza para cambiar el estado del componente
    //     const nuevoElemeto = 'Los Simpsons';
    //     //setCategorias([...categorias, nuevoElemeto]);//1era forma
    //     setCategorias(cats => [nuevoElemeto, ...cats]);//2da forma con callback y el nuevo elemento al principio

    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            {/* asi se manda la funcion a otro componente( comunicacion entre componentes) ↑ */}
            <hr />
            {/* <button onClick={agregaCategoria}>+ 1</button> */}
            <ol>
                {
                    categorias.map(categoria => (
                        <GifRes
                            key={categoria}
                            categoria={categoria}
                        />
                    ))
                }
            </ol>
        </>
    );
}



export default GifComponent;