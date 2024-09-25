// Reflow & Repaint manipulate DOM directly

// Reflow
// - process of calculating the position/dimension of an element
// - computationally highly intensive task

const t1 = performance.now();
for(let i=0;i<100;i++){
    const para = document.createElement("p");
    para.textContent = "Para " + i;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log(t2-t1);  // 100 reflows + 100 repaints

// Repaint
// - process of displaying content/element pixel by pixel
// - faster

const t3 = performance.now();
const div = document.createElement("div");
for(let i=0;i<100;i++){
    const para = document.createElement("p");
    para.textContent = "Para " + i;
    div.appendChild(para);
}
document.body.appendChild(div);
const t4 = performance.now();
console.log(t4-t3); // 1 reflow + 1 repaint

// Better approach - document fragment
const docFragment = document.createDocumentFragment();
for(let i=0;i<100;i++){
    const para = document.createElement("p");
    para.textContent = "Para " + i;
    div.appendChild(para); // no reflow & repaint
}
document.body.appendChild(docFragment);