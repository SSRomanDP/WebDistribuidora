const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach(image => image.style.display = 'none');
  images[index].style.display = 'block';
}

function showNextImage() {
  showImage(currentImageIndex);
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

showNextImage(); // Mostrar la primera imagen al cargar
setInterval(showNextImage, 4000); // Cambiar de imagen cada 3 segundos

(function(d, s, id) {
  if (d.getElementById(id)) {
      if (window.__TOMORROW__) {
          window.__TOMORROW__.renderWidget();
      }
      return;
  }
  const fjs = d.getElementsByTagName(s)[0];
  const js = d.createElement(s);
  js.id = id;
  js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');

//Efecto de transicion suave
// Agregar un controlador de eventos a los enlaces
const enlaces = document.querySelectorAll('a');
enlaces.forEach(enlace => {
  enlace.addEventListener('click', (event) => {
    event.preventDefault();
    // Aplicar la transición (por ejemplo, cambio de color de fondo)
    document.body.style.backgroundColor = 'black';
    setTimeout(() => {
      // Redireccionar a la nueva página
      window.location.href = enlace.href;
    }, 500); // Ajusta el tiempo de espera según tu transición CSS
  });
});
