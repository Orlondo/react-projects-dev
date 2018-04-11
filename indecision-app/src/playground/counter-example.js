let count = 0;

const addOne = () => {
    console.log('Add One');
    count++;
    renderConterApp();
}

const minusOne = () => {
    console.log('Minus One');
    count > 0 && count--;
    renderConterApp();
}

const reset = () => {
    console.log('Reset');
    count = 0;
    renderConterApp();
}

const renderConterApp = () => {
    const templateTwo = (   
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    ); 
    
    ReactDOM.render(templateTwo, appRoot);
};

renderConterApp();