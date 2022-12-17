// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryElementMarkup(galleryItems);
    

function createGalleryElementMarkup() {
    const galleryMarkup = galleryItems.map(
        `
        <div class="gallery">
        <a class='gallery__item' href='${original}'>
                <img
                class='gallery__image'
                data-src='${preview}'
                alt='${description}'
                loading='lazy'
                />
                </a>
                </div>`)
        .join('');
    
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
};

createGalleryElementMarkup();

galleryContainer.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    
};

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
 });

console.log(galleryItems);



