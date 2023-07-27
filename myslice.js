let text = prompt();
let st = +prompt()
let end = +prompt()
let tx= ""
if(!st){
	st=0
}
if (!end){
	end=text.length 
}
for(i=st;i<end;i++){
    if(text===""){
        txt = '""'}
    else if(end > text.length){
        txt = '""'}
    else{
        tx+=text[i]}
    
}
console.log(tx)

