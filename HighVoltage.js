/*██████▓▓▓▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓███████████████████████████████████████████████*/
/*███▓▓▓▒▒▒░░░  DANGER! DANGER! HI-VOLTAGE!  ░░░▒▒▒▓▓▓████████████████████████████████████████████*/
/*██████▓▓▓▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓███████████████████████████████████████████████*/
Element.prototype.S = Element.prototype.querySelectorAll;
Element.prototype.s = Element.prototype.querySelector;

Element.prototype.on = function(str, fn, cap = false){
	var self = this;
	str.split(' ').forEach( function(evt){
		self.addEventListener(evt, fn, cap);
	});
}

Element.prototype.off = function(str, fn, cap = false){
	var self = this;
	str.split(' ').forEach( function(evt){
		self.removeEventListener(evt, fn, cap);
	});
}

NodeList.prototype.on = function(str, fn, cap = false){
	this.forEach(function(el){
		el.on(str, fn, cap);
	});
}

NodeList.prototype.off = function(str, fn, cap = false){
	this.forEach(function(el){
		el.off(str, fn, cap);
	});
}

function S(str){ return document.querySelectorAll(str) }
function s(str){ return document.querySelector(str) }
/*██████▓▓▓▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓███████████████████████████████████████████████*/
/*███▓▓▓▒▒▒░░░  WHEN WE TOUCH, WHEN WE KISS  ░░░▒▒▒▓▓▓████████████████████████████████████████████*/
/*██████▓▓▓▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓███████████████████████████████████████████████*/