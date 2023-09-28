$(document).ready(function() {
    var slides = $('.slide');
    var currentSlide = 0;
  
    function showSlide(index) {
      slides.removeClass('active');
      slides.eq(index).addClass('active');
    }
  
    $('.next').click(function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    $('.prev').click(function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  });

  // Ejemplo básico de manejo de productos en JavaScript
var productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 10
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 15
  },
  // Agrega más productos aquí
];

var carrito = [];

function agregarAlCarrito(id) {
  var producto = productos.find(function(item) {
    return item.id === id;
  });

  carrito.push(producto);
  // Actualiza la vista del carrito y el total
}

function actualizarCarrito() {
  // Actualiza la vista del carrito de compras
}

function calcularTotal() {
  // Calcula el total de la compra
}

// Escucha eventos de clic para agregar productos al carrito
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("agregar-al-carrito")) {
    var productId = parseInt(event.target.dataset.productId);
    agregarAlCarrito(productId);
    actualizarCarrito();
    calcularTotal();
  }
});

  