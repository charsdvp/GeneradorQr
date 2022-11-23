//Agregamos un evento a la carga del documento
document.addEventListener("DOMContentLoaded", (e)=>{
  //Ejecutamos las funciones
  obtenerQr();
})
//Creamos la funcion para obtener el Qr
function obtenerQr(){
  //Obtenemos las etiquetas
  let $codigo = document.querySelector("#codigo"),
  $generar = document.getElementById("generar");
  //Agregamos un evento al boton generar
  $generar.addEventListener("click", (e) => {
  //Obtenemos el valor del input text(URL o texto)
  let $URL = document.getElementById("input__URL").value;
    //Hacemos la validacion cuando el campo este vacio
  if($URL !== ""){
      //Creamos el objeto Qr
  new QRious({
      element: $codigo,
      value: $URL,// La URL o el texto
      size: 200,
      backgroundAlpha: 0, // 0 para fondo transparente
      foreground: "#fff", // Color del QR
      level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
    });
      $codigo.style.display = "block";
    }else{
      $codigo.style.display = "none";
    }
  });
}