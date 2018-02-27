function isPrime(n) {
    let i = 2
    while (i <= Math.sqrt(n) ) {
        if (n % i === 0 ) {
            return false
        }
        i++
    }
    return true
}

function firstN(n){
    let res = []
    let i = 2
    while(res.length < n) {
        if (isPrime(i)){
            res.push(i)
        }
        i++
    }
    return res
}


function clickedon() {
	let mytable = document.querySelector("#primetab")
	mytable.innerHTML = ""

	let usernum = document.querySelector("#primeinput")
	usernum = usernum.value

	let primeArray = firstN(usernum)
	
	
	let k = 0
	while(k < usernum) {
        let myrow = document.createElement("tr")
        mytable.appendChild(myrow)
		let newcell = document.createElement("td")
		newcell.innerHTML = primeArray[k]
		myrow.appendChild(newcell)
		k++
	}
}
