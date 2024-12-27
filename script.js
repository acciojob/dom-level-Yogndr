//your JS code here. If required.
let elem=document.getElementById("level");
let count=1;
if(elem.parentElement){
	count++;
	elem=elem.parentElement;
}
console.log('The level of the element is: ${count}')