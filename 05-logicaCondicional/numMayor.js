var numeroA = prompt("busca el numero mayor de tres dados, digita el primero:");
var numeroB = prompt("busca el numero mayor de tres dados, digita el segundo:");
var numeroC = prompt("busca el numero mayor de tres dados, digita el tercero:");
if(numeroA>numeroB){
    if(numeroA>numeroC){
        alert(numeroA+" es el mayor");
    }
}
else if (numeroB>numeroC){
    if(numeroB>numeroA){
        alert(numeroB+" es el mayor");
    }
}
else if (numeroC>numeroA){
    if(numeroC>numeroB){
        alert(numeroC+" es el mayor");
    }
}