import Keys from "../CalculatorKeys";

function calculatorBody() {
    return (
        <div className="calculatorBody">
            <div className="calculatorLine">
                <Keys keySymbol="1" />
                <Keys keySymbol="2" />
                <Keys keySymbol="3" />
                <Keys keySymbol="/" />
            </div>
            <div className="calculatorLine">
                <Keys keySymbol="4" />
                <Keys keySymbol="5" />
                <Keys keySymbol="6" />
                <Keys keySymbol="x" />
            </div>
            <div className="calculatorLine">symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
symbol
                <Keys keySymbol="7" />
                <Keys keySymbol="8" />
                <Keys keySymbol="9" />
                <Keys keySymbol="-" />
            </div><div className="calculatorLine">
                <Keys keySymbol="0" />
                <Keys keySymbol="." />
                <Keys keySymbol="=" />
                <Keys keySymbol="+" />
            </div>
            <div className="calculatorLine"></div>
        </div>
    );
}


export default calculatorBody;