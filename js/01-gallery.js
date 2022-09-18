import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return`<div class="gallery__item">
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
.join('');
  }


console.log(galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
 
  const isGalleryEl = event.target.classList.contains("gallery__image");

  if(!isGalleryEl){
    return;
  }
  const oridginalImg = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${oridginalImg}" width="800" height="600">`);

   instance.show();
  
};




// const galleryMarkup = images.reduce(
//     (acc, item) => acc + createGalleryItem(item),
//     ""
//   );
//   refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
//   refs.image.classList.add("gallery__image");
  
//   refs.gallery.addEventListener("click", onGalleryClick);
//   refs.btn.addEventListener("click", onClickHandlerClose);
//   refs.modal.addEventListener("click", closeLightbox);
  
  // function onGalleryClick(e) {
  //   e.preventDefault();
  //   if (e.target.nodeName !== 'IMG') {
  //     return;
  //   }
  //   if (e.target.nodeName === "IMG") {
  //     refs.lightbox.classList.add("is-open");
  //     refs.lightbox__image.src = e.target.getAttribute("data-source");
  //     refs.lightbox__image.alt = e.target.alt;
  //   }
  //   window.addEventListener("keyup", clickKey);
  // }
  btn.addEventListener("click", onClickHandlerClose);
  modal.addEventListener("click", closeLightbox);
  
  function onClickHandlerClose(event) {
    event.preventDefault(); 
    refs.lightbox.classList.remove("is-open");
    refs.lightbox__image.src = '';
    refs.lightbox__image.alt = '';
    window.removeEventListener("keyup", clickKey);
  }
  
  function closeLightbox(event) {
    if (event.target === event.currentTarget) {
      onClickHandlerClose();
    }
  }
  
  function clickKey(event) {
    if (event.code === "Escape") {
      onClickHandlerClose();
    }
  }