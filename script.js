const btn = document.querySelectorAll(".buttons button")
 const box = document.querySelector(".box")

 btn.forEach((button) =>{
  button.addEventListener("click", ()=> {
    if(button.className == "left"){
    box.style.marginLeft = "0"
    }
    if(button.className == "top"){
    box.style.marginTop = "0"
    }
    if(button.className == "bottom"){
    box.style.marginTop = window.innerHeight - 100 + "px"
    }
    if(button.className == "right"){
        box.style.marginLeft = window.innerWidth - 100 + "px";
    }
  }); 
 })

 window.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowLeft"){
        box.style.marginLeft = "0"
        }
        if(e.key == "ArrowUp"){
        box.style.marginTop = "0"
        }
        if(e.key == "ArrowDown"){
        box.style.marginTop = window.innerHeight - 100 + "px"
        }
        if(e.key == "ArrowRight"){
            box.style.marginLeft = window.innerWidth - 100 + "px";
        }
 }) 

 const arr =  ["top","left","right","bottom"]
  
 setInterval(()=>{
    const random = arr[Math.floor(Math.random()* arr.length)];

    if(random == "left"){
        box.style.marginLeft = "0"
        }
        if(random == "top"){
        box.style.marginTop = "0"
        }
        if(random == "bottom"){
        box.style.marginTop = window.innerHeight - 100 + "px"
        }
        if(random == "right"){
            box.style.marginLeft = window.innerWidth - 100 + "px";
        }
        console.log(random);
 },500)