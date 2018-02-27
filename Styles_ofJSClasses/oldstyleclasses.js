function Can(radius, height) {
	this.radius = radius;
	this.height = height;
}

Can.prototype.volume = function() {
	return this.radius * this.radius * Math.PI * this.height;
}

coke = new Can(5,12)

console.log(coke.volume())