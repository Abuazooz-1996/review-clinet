let numbers=document.querySelectorAll("ul li")
let button=document.querySelector(".button")
let span=document.querySelector(".image-2 span")
let container=document.querySelector(".container")
let container2=document.querySelector(".container-2")




console.log(span)
console.log(button)


// function active(){
//     numbers.forEach((n)=>{
//         n.this.classList.toggle("active")
//     })
// }
// numbers.forEach((n)=>{
//        n.classList.remove("active")
// })

numbers.forEach((n)=>{
    n.addEventListener("click",(r)=>{
            numbers.forEach((s)=>{
                s.classList.remove("active")
            }) 
            r.target.classList.add("active")
            
    })
})

// document.addEventListener("click",(e)=>{
//     if(e.target.className=="container"){
//         console.log("iam fron container")
//         container.style.background="red"
//         numbers.forEach((s)=>{
//             s.classList.remove("active")
//         })
      
//     }
// })

button.addEventListener("click",()=>{
    // let ne=container.cloneNode(true)
    // ne.id="ee"
    // document.body.appendChild(ne)
        // container.classList.add("no")
        // container2.classList.remove("no")
        //span.textContent=n.textContent
   numbers.forEach((n)=>{
    if(n.classList.contains("active")){
        container.classList.add("no")
        container2.classList.remove("no")
        span.textContent=n.textContent
        
    }
    else{
        false
    }
  
   })
})


