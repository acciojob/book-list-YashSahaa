//your JS code here. If required.
let inputs = document.querySelectorAll("input")
let submit = document.querySelector("#submit")

submit.addEventListener("click",()=>{
    let body = document.querySelector("book-list")
    let row = body.insertRow()
    for(let i=0;i<4;i++){
        let cell = row.insertCell(i)
        if(i==3){
            cell.textContent = "cross"
        }
        else{
            cell.textContent = `${inputs[i].value}`
        }
    }
})