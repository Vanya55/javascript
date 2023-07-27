let text = prompt("Enter text:");
let char = prompt("enter char:")
let new_char= prompt("Enter new char:")
let count = +prompt("enter count:")
let st = ""
let quantity = 0
for(let el of text){
	if(el === char){
  	if(quantity===count)
    	st+=el
    else if(quantity<count)
    	st+=new_char
      quantity+=1}
  else{
  	st+=el}
}
console.log(st)

