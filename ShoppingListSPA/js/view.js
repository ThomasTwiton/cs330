function redrawTable(scope, msg){
    console.log(msg)

    mytable = document.querySelector("#list")
    mytable.innerHTML = ""

    for (let i=0; i < scope.items.length; i++){
        let myrow = document.createElement("tr")
        mytable.appendChild(myrow)

        let checkbox = document.createElement("td")
        checkbox.innerHTML = "<input type=checkbox />"
        myrow.appendChild(checkbox)        

        thisitem = scope.items[i]
        myarray = [thisitem.name, thisitem.qty, thisitem.store, thisitem.section, thisitem.price]
        for (let j=0; j<5; j++){
            let newcell = document.createElement("td")
            newcell.innerHTML = myarray[j]
            myrow.appendChild(newcell)       
        }
        if (thisitem.priority == "High"){
            myrow.classList.add("danger")
        } 
        if (thisitem.priority == "Medium"){
            myrow.classList.add("warning")
        } 
        if (thisitem.priority == "Low"){
            myrow.classList.add("success")
        }      
    }
}