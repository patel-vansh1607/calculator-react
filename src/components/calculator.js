import "../styles/calculator.css"


const Calculator = () => {
    return(
    <div className="container">
        <div className="calculator">
            <form action="">
                <div>
                    <input type="text"/>
                    <div>
                        <input type="button" value="AC"/>
                        <input type="button" value="DE"/>
                        <input type="button" value="."/>
                        <input type="button" value="/"/>
                    </div>
                    <div>
                        <input type="button" value="7"/>
                        <input type="button" value="8"/>
                        <input type="button" value="9"/>
                        <input type="button" value="*"/>
                    </div>
                    <div>
                        <input type="button" value="4"/>
                        <input type="button" value="5"/>
                        <input type="button" value="6"/>
                        <input type="button" value="+"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Calculator;