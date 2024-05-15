//your JS code here. If required.
let inputs = document.querySelectorAll("input")
let submit = document.querySelector("#submit")

submit.addEventListener("click",()=>{
    let body = document.querySelector("#book-list")
    let row = body.insertRow()
    for(let i=0;i<4;i++){
        let cell = row.insertCell(i)
        if(i==3){
			let newBtn = document.createElement('button');
			newBtn.className="delete";
		    newBtn.innerText = 'X';
            cell.append(newBtn)
        }
        else{
            cell.textContent = `${inputs[i].value}`
        }
    }
	body.append(row)
})
let delBtn = document.querySelectorAll(".delete")
for(let i=0;i<delBtn.length;i++){
	delBtn[i].addEventListener("click",(event_details)=>{
		console.log(event_details)
		event_details.target.parentNode.parentNode.remove()
	})
}