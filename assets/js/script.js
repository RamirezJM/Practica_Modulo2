document.getElementById("myForm").addEventListener("submit", respuesta);
function respuesta(event){
  event.preventDefault();
  document.querySelector("h1").innerText = "Comentario enviado. Pronto te responderé.";
}
