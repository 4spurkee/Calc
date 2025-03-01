const disp = document.getElementById('display');
function toDisp(button){
    if(button.innerText == '-'){
        if(disp.value == '') return;
        if(disp.value[disp.value.length-1] == '+' ) return ;
      
        
    }
    disp.value += button.innerText;
}
function clr(){disp.value = '';}
function calc(){disp.value = eval(disp.value);}