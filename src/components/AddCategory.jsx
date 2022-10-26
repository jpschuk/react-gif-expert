import { useState } from "react";

function AddCategory({onNewCategory}) {
    const [InputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = ( event ) => {
        event.preventDefault()
        if(InputValue.trim().length < 1) return
      // // setCategories(categories => [...categories,InputValue])
      onNewCategory(InputValue.trim())
      setInputValue("")
    } 
    return (
        <>
            <form onSubmit={onSubmit} >
                <input
                    type='text'
                    placeholder='buscar gifs'
                    value={InputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    );
}

export default AddCategory;
