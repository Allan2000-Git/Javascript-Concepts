document.querySelector("#categories").addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        console.log(e.target.id);
        window.location.href = "/" + e.target.id;
    }
})