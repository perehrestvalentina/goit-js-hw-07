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


// console.log(galleryMarkup);


galleryContainer.addEventListener('click', onGalleryContainerClick);


function onGalleryContainerClick(event){
   event.preventDefault();
   console.log(event.target.dataset.sourse);


  if(!event.target.classList.contains('gallery__image')){
    return;
  }
  window.addEventListener("keydown",onEscapePress);


  const instance = basicLightbox.create(
    `<img src="${target.dataset.source}" width="800" height="600">`, );
    instance.show();   
       
  }
 

  function onEscapePress(event){
    if (event.key === "Escape"){
      instance.close();
  
      window.removeEventListener("keydown", onEscapePress);
      console.log (event.code);
    }
    const instance = basicLightbox.create(
      `<img src="${target.dataset.source}" width="800" height="600">`,
      
      { 
        onShow: instance =>{
         document.addEventListener("keydown", function(event){
           if (event.key ==="Escape"){
             return instance.close();}
         });
          },
        onClose:instance =>{
         document.addEventListener("keydown", function(event){
           if (event.key ==="Escape"){
             return instance.close();}
         });
         },
       }
     
        );
    
 instance.show();}



