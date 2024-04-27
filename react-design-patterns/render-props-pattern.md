## The render props pattern is a technique in React where a component's prop is a function that returns JSX. 

### This allows the component to share its internal state or logic with its children.

```
<!-- App.js -->

import "./styles.css";
import Input from "./Input";
export default function App() {
    const showValue = (value) => <b>The value is {value}</b>;
    const multiplyByTen = (value) => <>The multiplied value is {value * 10}</>;
    return (
        <div className="App">
        <Input renderTextBelow={showValue} />
        <br />
        <Input renderTextBelow={multiplyByTen} />
        </div>
    );
}

<!-- Input.js -->

import { useState } from "react";

const Input = (props) => {
    const [value, setValue] = useState(null);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <>
        <input value={value} onChange={handleChange} />
        <br />
        {props.renderTextBelow(value)}
        </>
    );
};

export default Input;

```