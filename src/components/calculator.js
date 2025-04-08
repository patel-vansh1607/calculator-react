import React, { useState } from "react";
import "../styles/calculator.css";

const Calculator = () => {
    const [value, setValue] = useState("");

    const handleClick = (e) => {
        setValue(value + e.target.value);
    };

    const handleClear = () => {
        setValue("");
    };

    const handleDelete = () => {
        setValue(value.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            setValue(eval(value).toString());
        } catch (error) {
            setValue("Error");
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <form>
                    <div className="display">
                        <input type="text" value={value} readOnly />
                    </div>
                    <div className="buttons">
                        <input type="button" value="AC" onClick={handleClear} />
                        <input type="button" value="DE" onClick={handleDelete} />
                        <input type="button" value="." onClick={handleClick} />
                        <input type="button" value="/" onClick={handleClick} />
                        <input type="button" value="7" onClick={handleClick} />
                        <input type="button" value="8" onClick={handleClick} />
                        <input type="button" value="9" onClick={handleClick} />
                        <input type="button" value="*" onClick={handleClick} />
                        <input type="button" value="4" onClick={handleClick} />
                        <input type="button" value="5" onClick={handleClick} />
                        <input type="button" value="6" onClick={handleClick} />
                        <input type="button" value="+" onClick={handleClick} />
                        <input type="button" value="1" onClick={handleClick} />
                        <input type="button" value="2" onClick={handleClick} />
                        <input type="button" value="3" onClick={handleClick} />
                        <input type="button" value="-" onClick={handleClick} />
                        <input type="button" value="00" onClick={handleClick} />
                        <input type="button" value="0" onClick={handleClick} />
                        <input type="button" value="=" className="equal" onClick={handleCalculate} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Calculator;
