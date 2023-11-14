let getValue= document.getElementById("type-value");
 
function display(num){
    getValue.value += num;
}
function calculate(){
    try{
      getValue.value=eval(getValue.value);  
    }
    catch(err)
    {
        alert("Invalid typing")
    }
}
function clear(){
    getValue.value=("");
}
function del(){
    getValue.value=getValue.value.slice(0,-1);
}