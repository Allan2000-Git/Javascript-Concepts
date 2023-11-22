function counter(){
    let count=0
    return function(){
        count+=1
        console.log(count);
    }
}

let incrementCount = counter()

// incrementCount()
// incrementCount()
// incrementCount()


// useState

function useState(initialValue){
    let state = initialValue
    function setState(val){
        state = val
    }
    function getState(){
        return state;
    }

    return [getState, setState]
}

function Counter(){
    const [count, setCount] = useState(0)

    return{
        click(){
            setCount(count() + 1)
        },

        render(){
            console.log(`value of count is ${count()}`);
        }
    }
}

const count = Counter()

count.click()
count.render()

count.click()
count.render()

count.click()
count.render()