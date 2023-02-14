const gallery = document.querySelector('.gallery')
const imageLength = 21;

for (let i = 0; i < imageLength; i++){
    const newImageContainer = document.createElement('div')
    newImageContainer.classList.add('image-container')
    newImageContainer.innerHTML = `<img src="./images/allimages/${i}.jpg" alt="">`
    gallery.appendChild(newImageContainer);
}
