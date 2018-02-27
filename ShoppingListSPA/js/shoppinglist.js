function add() {
    let mytable = document.querySelector("#list")
    let iteminput = document.querySelector("#item")
    let qtyinput = document.querySelector("#quantity")
    let storeinput = document.querySelector("#store")
    let sectioninput = document.querySelector("#section")
    let priceinput = document.querySelector("#price")
    let priorityinput = document.querySelector("#priority")
    let myarray = [iteminput, qtyinput, storeinput, sectioninput, priceinput]

    let myrow = document.createElement("tr")
    let checkbox = document.createElement("td")
    checkbox.innerHTML = "<input type=checkbox />"
    myrow.appendChild(checkbox)
    mytable.appendChild(myrow)
    for(let i=0; i<5; i++){        
        let newcell = document.createElement("td")
        newcell.innerHTML = myarray[i].value
        myrow.appendChild(newcell)       
    }
    if (priorityinput.value == "High"){
        myrow.style.backgroundColor = "red"
    } 
    if (priorityinput.value == "Medium"){
        myrow.style.backgroundColor = "yellow"
    } 
    if (priorityinput.value == "Low"){
        myrow.style.backgroundColor = "green"
    } 
}
