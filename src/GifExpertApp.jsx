import React from "react";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        "cyberpunk edgerunners",
    ]);

    function onAddCategory(newCategory) {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }

    return (
        <section className="row">
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            <h1>GifApp searcher</h1>
            {categories.map((category) => {
                return <GifGrid className="col-6" key={category} category={category} />;
            })}
            </section>
    );
};
