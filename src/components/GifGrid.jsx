import React from "react";
import GrifItem from "./GrifItem";
import { useFetchGifs } from "../helpers/hooks/useFetchGifs";

export function GifGrid({ category }) {
    const { images, isLoading } = useFetchGifs(category);
    function loading(loading){
        if (loading === true){
            return <h2>Cargando...</h2>
        }
    }
    return (
        <>
        <div>{loading}</div>
            <h3>{category}</h3>
            <div className='card-grid'>
                {images.map((images) => (
                    <GrifItem
                        key={images.id}
                        title={images.title}
                        url={images.url}
                    />
                ))}
            </div>
        </>
    );
}
