import { galleryItems } from "./gallery-items.js";
// Change code below this line

////////////////////////////////////////////////////////////////////////////////////////////////////////

const gallery = document.querySelector("ul.gallery");

galleryItems.map((element) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `  
<li class="gallery__item">
    <a class="gallery__link" hreff="${element.original}">
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

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Делегирование + передача ссылки для открытия модального окна

function openModal(src) {
  const instance = basicLightbox.create(
    `
  <img src=${src}></img>
`,
    {
      onShow: (instance) => {
        document.onkeydown = (event) => {
          let isEscape = event.key === "Escape";
          if (isEscape) {
            instance.close();
          }
        };
      },
    }
  );
  instance.show();
}

gallery.addEventListener("click", (event) => {
  const dataSource = event.target.getAttribute("data-source");
  if (dataSource !== null) {
    openModal(dataSource);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////
