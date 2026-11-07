const inputusuario = document.getElementById("correo");
const inputcontraseña = document.getElementById("contraseña");

const botonlogin = document.getElementById("iniciar-sesion");


botonlogin.addEventListener("click", function() {


if (inputusuario.value == "carla2023@gmail.com" && inputcontraseña.value == "123456") {
  
  window.location.href = "inicio.html";

} else {
  
  alert("Correo o contraseña incorrectos");
}





});
