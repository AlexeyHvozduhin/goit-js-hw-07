import { galleryItems } from "./gallery-items.js";

// Change code below this line

// Создание галереи

const gallery = document.querySelector("ul.gallery");

galleryItems.map((element) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `  
<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
      />
    </a>
  </li>
  `
  );
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: `alt`,
});

// console.log(lightbox.elements);
