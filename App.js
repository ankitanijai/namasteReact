// const heading = React.createElement('h1', {id:'heading'}, 'hello from react')
// console.log(heading);
const parent = React.createElement('div', { id: 'parent' },
    [
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'hello from h1'), 
            React.createElement('h2', {}, 'hello from h2')]),
            React.createElement('div', { id: 'child2' },
            [React.createElement('h1', {}, 'hello from child h1'), 
                React.createElement('h2', {}, 'hello from child h2')
            ])
        
    ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)