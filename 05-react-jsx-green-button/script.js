const App = ({ initialButtonText, initialButtonColor }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [buttonColor, setButtonColor] = React.useState(initialButtonColor);

    const onButtonClick = () => {
        setButtonText(`Hello from React, ${Math.random() * 100}`);
        setButtonColor(buttonColor === 'red-btn' ? 'green-btn' : 'red-btn')
    }
    return (
        <div className="app">
            <button className={buttonColor} onClick={onButtonClick} >{buttonText}</button>
        </div>
    )
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="click me" initialButtonColor='red-btn' />);