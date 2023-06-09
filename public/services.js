import { IMGSGALLERY } from "./images-gallery";

export function getImages() {
  const imgGalleryList = IMGSGALLERY;
  return imgGalleryList;
}

export function filterGallery(imgTag) {
  const filteredGallery = getImages().filter(tag => tag.tag === imgTag);
  return filteredGallery;
}