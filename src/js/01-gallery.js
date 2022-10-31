import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryCard } from "./galleryCard";

const boxForGalleryCard = document.querySelector(".gallery");

boxForGalleryCard.insertAdjacentHTML("beforeend", galleryCard);

const onImageClick = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a"б { captionsData: "alt", captionDelay: 250 });
};

boxForGalleryCard.addEventListener("click", onImageClick);