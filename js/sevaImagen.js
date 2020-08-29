var contenedorDeImagen = $("#contenedorImagen");
console.log(contenedorDeImagen);
contenedorDeImagen.addEventListener("click",desaparece);


function aparece(){
    contenedorDeImagen.classList.remove("animate__slideOutUp");
    contenedorDeImagen.classList.add("animate__slideInDown");
    
}

function desaparece(){
    contenedorDeImagen.classList.remove("animate__slideInDown");
    contenedorDeImagen.classList.add("animate__slideOutUp");
    playFullscreen ();
}