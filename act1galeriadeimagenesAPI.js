const imageGallery = document.getElementById('imageGallery');
const loadImagesBtn = document.getElementById('loadImagesBtn');
const accessKey = 'JLs1hWFK4sV3C8cZ8vd3Q8bDvyyjqXO6LOvbZIpLHEg'; // Reemplaza con tu API Key de Unsplash

// Función para obtener imágenes aleatorias desde Unsplash
async function loadRandomImages() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?count=6&client_id=${'JLs1hWFK4sV3C8cZ8vd3Q8bDvyyjqXO6LOvbZIpLHEg'}`);
        const images = await response.json();
        displayImages(images);
    } catch (error) {
        console.error('Error al cargar las imágenes:', error);
    }
}

// Función para mostrar las imágenes en la galería
function displayImages(images) {
    imageGallery.innerHTML = ''; // Limpiar la galería antes de mostrar las nuevas imágenes
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description || 'Imagen de Unsplash';
        imageGallery.appendChild(imgElement);
    });
}

// Event listener para cargar nuevas imágenes al presionar el botón
loadImagesBtn.addEventListener('click', loadRandomImages);

// Cargar imágenes cuando la página se abre por primera vez
window.onload = loadRandomImages;
