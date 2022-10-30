import { galleryItems } from "./gallery-items";

export const galleryCard = galleryItems
  .map((image) => {
    const { preview, original, description } = image;
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
