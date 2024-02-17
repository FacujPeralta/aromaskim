//Vincular el boton con el id que le pusimos al boton
const BTN = document.getElementById("btn");

//Luego utilizamos un metodo de JS AddEventListener => Lo usamos para registrar un controlador de eventos en un objeto especifico (Este caso, el voton)
//El elemento que va a controlar, es un elemento del DOM

//Sintaxis básica de AddEventListener 

// elemento.addEventListener(evento, function) => (El evento va a ser referencia a la acción que se ejecuta en ese momento / funcion va a ejecutar que se tiene que producir)

BTN.addEventListener(`click`, function(){
  alert("Se agrego al carrito");
});

//Segundo método, utilizamos las propiedades del NODO

const BTN2 = document.getElementById("btn2");

BTN2.onclick = () => {
  alert("Se agrego al carrito");
}

//Tercer metodo escribiendo funciones en el HTML

function jsEnHtml(){
  alert("Estamos llamando una funcion desde HTML")
};

