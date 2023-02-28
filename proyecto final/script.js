// Funcion boton, informacion personal
document.getElementById('boton').onclick=function(){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "<span>Hola, soy Jannie Nichols</span> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s" 
}

//mensaje correo obligatorio
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});