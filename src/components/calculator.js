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
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Calculator;