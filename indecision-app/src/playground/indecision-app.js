console.log('app.js is running');

// JSX
const app = {
    title: 'Indecision App',
    subtitle: `This app was made by Orlondo Rue`,
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle && app.subtitle === app.subtitle) && <h3>{app.subtitle}</h3> }
            <p>lorem ipsum</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={removeAll}>Remove All</button>

            <ol>
                {app.options.map((options) => <li key={options}>{options}</li>)}
            </ol> 

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();