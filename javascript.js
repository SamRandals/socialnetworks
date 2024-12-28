

//agarro los pinches items de mrd

let main = document.querySelector(".main-center");
let button = document.querySelector(".checkbox");

let isSansActive = false; // Bandera para alternar entre fondos

button.addEventListener("click", function () {
    if (!isSansActive) {
        main.style.background = "url('./icons/sans.gif')";
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center"; 
        main.style.color = "#222"; 
        isSansActive = true; // Actualiza la bandera
    } else {
        main.style.background = "#f5f5f5"; // Vuelve al fondo original
        isSansActive = false; // Resetea la bandera
    }
});