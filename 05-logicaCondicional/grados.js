var grados = prompt("convertir a celsius o farenheit?");
if(grados==="farenheit"){
    var farenheit = window.prompt("escribe los grados celsius");
    var final= (farenheit * 9/5) + 32;
    alert(final+"ºF");
}
else if  (grados==="celsius"){
    var celsius = window.prompt("escribe los grados farenheit");
    var final= ((celsius-32)*5)/9 ;
    alert(final+"ºC");
}
