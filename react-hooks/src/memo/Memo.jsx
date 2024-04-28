import React, { memo, useState } from 'react'

function Memo() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <MemoizedChild />
        </div>
    )
}

/*
In the context of React.memo, it helps to prevent unnecessary renders of functional components. 
When a component is wrapped with React.memo, it will only re-render if its props have changed. 
If the props remain the same between renders, React.memo returns the memoized version of the component, skipping the rendering process.
*/

function ChildComponent(){
    return <h1>Child Component</h1>
}

const MemoizedChild = memo(ChildComponent, function (prevProps, nextProps) {
    return true;
})

export default Memo