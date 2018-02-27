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

function nextPrime(n){
	let i = Number(n) + 1
	while (true) {
		if (isPrime(i)){
			return i
		}
	i++
	}    
}


function clickedon() {
	let myh1 = document.querySelector("#nextprime")
	let currentPrime = myh1.innerHTML
	myh1.innerHTML = ""
	if (currentPrime == ""){
		myh1.innerHTML = 2	
	} else {
		let newprime = nextPrime(currentPrime)
		myh1.innerHTML = newprime	
	}
}
