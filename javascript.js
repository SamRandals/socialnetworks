

//agarro los pinches items de mrd

let main = document.querySelector(".main-center");
let button = document.querySelector(".checkbox");
let audio = document.querySelector(".audio")

let fondo= document.querySelector(".fondo")
let isSansActive = false; // Bandera para alternar entre fondos

button.addEventListener("click", function () {
    if (!isSansActive) {
        main.style.background = "url('./icons/sans.gif')";
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center"; 
        main.style.color = "#222"; 
        fondo.style.background="url('images/2320e398125e34e287dd09eb6d36aaa6 (1).jpg')"
        fondo.style.backgroundSize="cover"
        audio.play()
        main.style.boxShadow="12px 12px 12px #black;"
        isSansActive = true; // Actualiza la bandera
    } else {
        main.style.background = "#f5f5f5"; // Vuelve al fondo original
        isSansActive = false; // Resetea la bandera
        
    }
});