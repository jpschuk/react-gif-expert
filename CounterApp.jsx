import React, { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ value }) {
    const [counter, setCounter] = useState(value);
    let reset = 0;

    function handleAdd() {
        setCounter(counter + 1);
    }
    function handleSubstract() {
        if (counter < 1) {
            return setCounter(reset);
        }
        setCounter(counter - 1);
    }

    function handleReset() {
        setCounter(reset);
    }
    return (
        <div className='container'>
            <h2  data-testid = "test-counter">{counter}</h2>
            <button data-testid= "substractEvent" onClick={handleSubstract} className='btnn'>
                -1
            </button>
            <button onClick={handleAdd} className='btnn'>
                +1
            </button>
            <button aria-label="button-reset" onClick={handleReset}>
                reset
            </button>
        </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export { CounterApp };
