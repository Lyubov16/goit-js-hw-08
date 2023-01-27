// Add imports above this line
// const Simplelightbox = require('simplelightbox');
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const imagesContainer = document.querySelector('.gallery');
console.log(imagesContainer)
const imagesMarkup = createImagesMarkup(galleryItems);
imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

// imagesContainer.addEventListener('click', onImagesClick)

function createImagesMarkup(galleryItems) {
    return galleryItems
        .map(galleryItem => {
        return `<a class="gallery__item" href="${galleryItem.original}">
<img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`})
        .join('')
};

const galleryELL = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

