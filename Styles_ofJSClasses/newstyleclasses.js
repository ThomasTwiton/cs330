class Can {
    constructor(height, radius) {
        this._height = height
        this.radius = radius
    }

    get volume() {
        return this.radius * this.radius * Math.PI * this._height
    }

    set volume(nv) {
        console.log("Error: You cannot change the volume")
    }

    get height() {
        return this._height
    }

    set height(nv) {
        if (nv <= 0) {
            console.log("Error: Height must be a positive nonzero value")
        } else {
            this._height = nv
        }
    }
}

coke = new Can(10, 1)

console.log(coke.volume)
coke.volume = 45
console.log(coke.volume)

console.height = -45
console.log(coke.volume)
console.height = 20
console.log(coke.volume)

