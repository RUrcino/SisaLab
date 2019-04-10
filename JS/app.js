const a = confirm("Quieres cambiar el titulo?")
if(a==true){
     let b = prompt("Cual sera el nuevo titulo?")
     
     document.getElementById("titulo").innerHTML = b;
}


