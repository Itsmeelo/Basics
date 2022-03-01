let div=document.getElementById("ReadMore")

let btn=document.createElement("Button")
btn.innerText = "Read More"
btn.style.backgroundColor ="black"
btn.style.color ="white"
btn.style.padding= "10 40"
btn.style.borderRadius = "7px"
btn.style.textAlign = "center"
btn.style.borderStyle = "solid"
btn.style.width = "150px"
btn.style.height = "40px"
div.appendChild(btn)
console.log(btn)

function fan() {
    alert ("Your clicked  Read More")
}

