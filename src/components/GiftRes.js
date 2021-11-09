
import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ImageItem } from './imageItem';

export const GifRes = ({ categoria }) => {

    const { data: images, loading } = useFetchGifs(categoria);

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">


                {
                    images.map(img => (
                        <ImageItem
                            key={img.id}
                            {...img} />
                    ))
                }

            </div>
        </Fragment>
    )
}

