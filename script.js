let button = document.getElementById("button")

button.addEventListener("click", function() {

    console.log("Button clicked.")

    const para = document.createElement("p")
    para.innerText = "You clicked the button!"
    document.body.appendChild(para)
})