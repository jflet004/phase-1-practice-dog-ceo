console.log("%c HI", "color: firebrick");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImages() {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => renderImages(data));
}

function renderImages(images) {
  const imageContainer = document.querySelector('#dog-image-container');
  images.message.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    imageContainer.appendChild(img);
    //console.log(img);
  })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchBreeds() {
  fetch(breedUrl)
  .then((response) => response.json())
  .then((data) => renderBreeds(data));
}

function renderBreeds(breeds) {
  const breedList = document.querySelector('#dog-breeds');
  const dogBreeds = Object.keys(breeds.message)
  dogBreeds.forEach(dogBreed => {
    
    const list = document.createElement('li');
    list.textContent = dogBreed;
    breedList.appendChild(list);

    list.addEventListener('click', () => {
      list.style.color = 'green';
    });

    // const dropdown = document.querySelector('#breed-dropdown');
    // dropdown.addEventListener('change', e => {
    //   const selection = e.target.value;
    //   if(selection === 'b' && dogBreed[0].includes('a')) {
    //     list.textContent = 'Wow'
    //   }
    //   console.log(e);
    // })
  })
}


document.addEventListener("DOMContentLoaded", function () {
  fetchImages();
  fetchBreeds();
});