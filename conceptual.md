### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a front-end framework acting as a blue print for applications. Compared to other front-end frameworks, React is easier to learn, more flexible, & lighter wieght.

- What is Babel?
    Babel is a JS transcompiler that takes ECMAScript 2015+ code and refactors it into backwards-compatible JS code that can be run by older JS engines. 

- What is JSX?
    JSX is a React extension to the JS language syntax. It provides a wat to structure component rendering using syntax familiar to most developers. It looks a lot like HTML

- How is a Component created in React?
    Components can be created as class components by extending React.Component or as a functional component that returns JSX to be rendered into HTML

- What are some difference between state and props?
    State in React refers to data specific to a Component instance. The data from state is mutable, unlike the data from props. State is used in cases where a developer would want to hide/show some data, fetch data from an API, or other DOM changes. Props are used for configuring components and are immutable. Props can't be changed inside the component. 

- What does "downward data flow" refer to in React?
    Downward data flow refers to parent components passing data down to child components so that the child component can use the data. 

- What is a controlled component?
    A controlled component is a component where form data is handled by a React component. 

- What is an uncontrolled component?
    A uncontrolled component is a component where form data is handled by the DOM.
    
- What is the purpose of the `key` prop when rendering a list of components?
    The purpose of the `key` prop is that it helps React figure out what has changed, hasn't changed, been added, deleted, etc.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using an array index for a `key` prop is a poor choice because an array index is not stable as arrays are mutable and elements within an array can be moved and changed. 

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a built in hook in React. it is used for running side effects in a single page app. useEffect accepts 2 arguments: a function (the side effect), a way of specifying when it will run. useEffect will run after the 1st render, and after all renders by default. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is another built in hook that returns an object whose value will persist outside of the state. 

- When would you use a ref? When wouldn't you use one?
 Common applications of useRef would be accessing an underlying DOM elements or setting up/ clearing timers. Refs shouldn't be used to make changes to the DOM (toggle classes, set text, etc.)

- What is a custom hook in React? When would you want to write one?
    Custom hooks in React allow functionality to be shared between components. Custom hooks can be made to abstract logic, handle repeated tasks, & render JSX. Custom hooks help move code out of components leading to cleaner components overall.
