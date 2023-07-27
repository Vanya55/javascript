let text = prompt();
let gorc = prompt();
let list = []
let st = ""
for(let el of text){
	if(el === gorc){
  	list.push(st)
    st=""
    }
  else{
  	st+=el}
}
if (st){
	list.push(st)
}
console.log(list)
	
