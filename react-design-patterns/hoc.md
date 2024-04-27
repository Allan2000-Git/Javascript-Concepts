## Higher-order components are functions that take a component and return a new component with additional functionality. 

### They are often used for code reuse and abstraction of logic.

```
<!-- App.js -->
import "./styles.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

export default function App() {
    return (
        <div className="App">
        <Comp1 />
        <Comp2 />
        </div>
    );
}
```

```
<!-- Comp1.js -->
import { forwardRef } from "react";
import WithDimension from "./WithDimension";
const Comp1 = (props, ref) => {
    return (
        <div ref={ref} className="comp1">
        Hey I am comp1 width: {props.width}
        </div>
    );
};

export default WithDimension(forwardRef(Comp1));

```

```
<!-- Comp2.js -->
import { forwardRef } from "react";
import WithDimension from "./WithDimension";
const Comp2 = (props, ref) => {
    return (
        <div ref={ref} className="comp2">
        Hey I am comp2 width: {props.width}
        </div>
    );
};

export default WithDimension(forwardRef(Comp2));

```

```
<!-- WithDimension.js -->
import { useEffect, useRef, useState } from "react";

const withDimension = (Element) => {
    function WithDimensions(props) {
        const compRef = useRef();
        const [width, setWidth] = useState(null);
        const [height, setHeight] = useState(null);

        useEffect(() => {
        if (compRef.current) {
            setWidth(compRef.current.offsetWidth);
            setHeight(compRef.current.offsetHeight);
        }
        }, [compRef]);
        return <Element ref={compRef} width={width} height={height} {...props} />;
    }
    return WithDimensions;
};

export default withDimension;

```