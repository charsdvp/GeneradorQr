export default function obtenerQr(){
  document.addEventListener('click', ( e ) => {
    // Capturamos las variables
    let $url = document.getElementById('input__URL').value
    let $codigo = document.querySelector("#codigo")
    let $mostrar_Contenedor = document.querySelector('.container__Qr')
    let $btn__copy = document.querySelector('.btn__copy');
    // Capturamos el boton Genenerar
    const btnGenerar = document.getElementById('generar');

    // Validamos el boton
    if(e.target.id === btnGenerar.id){
      $btn__copy.innerText = 'Copiar'
      //Hacemos la primer validacion si la url viene vacia
      if($url == '') return;
      //Creamos el objeto Qr
      new QRious({
        element: $codigo,
        value: $url,// La URL o el texto
        size: 200,
        backgroundAlpha: 0, // 0 para fondo transparente
        foreground: "#fff", // Color del QR
        level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
      });
      $mostrar_Contenedor.style.display = 'block'
      $codigo.style.display = "block";
    }
    // Validamos el boton copiar
    if(e.target == $btn__copy){
      //Creamos un objeto imagen      
      $btn__copy.innerText = '¡Copiado!'
      let img = new Image();
      img.src = $codigo.src;
      img.onload = function(){
        let canvas =  document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function(blob){
          navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        })
      }
    }
  })
}