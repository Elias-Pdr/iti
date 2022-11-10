let inputTxt = document.querySelectorAll(".input")


inputTxt[0].addEventListener('mouseover', (e)=>{ 
    body.style.justifyContent = "normal"
    console.log("p");
})
inputTxt[0].addEventListener('mouseout', (e)=>{ 
    body.style.justifyContent = "space-between"
    console.log("p");
})