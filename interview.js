// 0 1 2 3 4 => let (global scoped)
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 2000);
}

// 5 5 5 5 5 => var (points to same memory location | function scoped)
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        // console.log(i);
    }, 2000);
}

for (var i = 0; i < 5; i++) {
    function print(val){
        setTimeout(() => {
            console.log(val);
        }, 2000);
    }
    print(i)
}

