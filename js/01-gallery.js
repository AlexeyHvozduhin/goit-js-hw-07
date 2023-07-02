import { galleryItems } from "./gallery-items.js";
// Change code below this line

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Создание галереи

console.log(galleryItems);

const gallery = document.querySelector("ul.gallery");

const imgArray = [];

galleryItems.map((element) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  img.classList.add("gallery__image");
  //   li.maxWidth = "100%";
  //   li.maxHeight = "100%";

  img.src = element.preview;
  img.alt = element.description;
  img.source = element.original;
  // a.href = element.original;

  //   img.style.width = "100%";
  //   img.style.height = "100%";
  //   img.style.objectFit = "cover";

  a.append(img);
  li.append(a);
  imgArray.push(li);
});

gallery.append(...imgArray);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Делегирование + передача ссылки для открытия модального окна

function openModal(src) {
  const instance = basicLightbox.create(
    `
  <img src=${src}></img>
`,
    {
      closable: true,
    }
  );
  return instance;
}

gallery.addEventListener("click", (event) => {
  openModal(event.target.source).show((instance) => {
    document.addEventListener("keydown", (event) => {
      // Закрытие модального окна с помощью esc
      if (event.key == "Escape" && basicLightbox.visible()) {
        instance.close();
      }
    });
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////
