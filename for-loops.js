for (var i = 5; i <= 120; i += 10) {
	console.log(i);
} 

for (var p = 4096; p >= 1; p /= 2) {
	console.log(p);
}
var presidentsUs = ["George Washington", "John Adams", "Thomas Jefferson"];

for (var x = 0, y = presidentsUs.length; x < y; x++) {
	console.log(`President #` + (x + 1) + " was " + `${presidentsUs[x]}`);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var keys in antSpecies) {
	console.log(`${[keys]}`);
}