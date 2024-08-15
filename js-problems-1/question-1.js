/*
Write functio called compute:
const input = {
    A: (a,b,c) => a+b+c,
    B: (a,b,c) => a-b-c,
    C: (a,b,c) => a+bc,
    D: {
        E: (a,b,c) => a+b+c
    }
}

compute(1,1,1)

OUTPUT:
{
    A:3
    B:-1,
    C:1,
    D:{
        E:3
    }
}

 */

const input = {
    A: (a,b,c) => a+b+c,
    B: (a,b,c) => a-b-c,
    C: (a,b,c) => a+(b*c),
    // D: {
    //     E: (a,b,c) => a+b+c
    // }
}

function compute(a,b,c) {
    const keys = Object.keys(input);
    let answerObj = {}
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        // if(typeof input[key] !== Function){
        //     return compute()
        // }
        answerObj[key] = input[key](a,b,c)
    }

    return answerObj;
}

console.log(compute(1,1,1));

