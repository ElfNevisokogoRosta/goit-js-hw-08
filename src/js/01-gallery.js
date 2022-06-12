import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
import galleryItemsEl from '../tamplates/gallery-items.hbs';
// Change code below this line
const imgGallery = document.querySelector('.gallery');
const listImages = galleryItems
                    .map(item => `<li class='gallery__item'>
                                    <a class="gallery__link" href=${item.original}>
                                        <img class='gallery__image'
                                            src = ${item.preview}
                                            alt = ${item.description}
                                        />
                                    </a>
                                </li>`)
                    .join('');
imgGallery.innerHTML = listImages;
const lightbox = new SimpleLightbox('.gallery a', {
    docClose: true,    
    captions: true, 
    captionSelector: 'img',
    captionsData: 'alt', 
    captionDelay: 250,
    enableKeyboard: true,
    });