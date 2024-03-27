document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header')
    const dogsList = document.querySelector('.dogs-list')
    const dogsListButton = document.querySelector('.dogs-list_button')
    const main = document.querySelector('.main')
    const mainDogSection = document.querySelector('.main__dog-section')
  
    function renderDogList() {
      for (let i = 0; i < data.length; i++) {
        const dogJs = data[i]
        const listItem = document.createElement('li')
        listItem.classList.add('dogs-list__items')
        listItem.textContent = dogJs.name
        listItem.addEventListener('click', function () {
          renderMainCard(dogJs)
        })
        dogsList.appendChild(listItem)
      }
    }
  
    function renderMainCard(dogJs) {
      const mainCardContent = document.createElement('div')
      mainCardContent.classList.add('main-card-content')
      mainDogSection.innerHTML = '' 
      mainDogSection.appendChild(mainCardContent)
  
       //Rendering the dogname
       const dogName = document.createElement('h2')
       dogName.textContent = dogJs.name
       mainCardContent.appendChild(dogName)

      //Rendering the image
      const dogImage = document.createElement('img')
      dogImage.classList.add('main-card__image')
      dogImage.setAttribute('alt', dogJs.name)
      dogImage.setAttribute('src', dogJs.image)
      mainCardContent.appendChild(dogImage)
  
      //Rendering the Dog info
      const dogInfo = document.createElement('p')
      dogInfo.classList.add('main-card__info')
      mainCardContent.appendChild(dogInfo)
  
      const dogBio = document.createElement('p')
      dogBio.textContent = "Bio: " + dogJs.bio
      dogInfo.appendChild(dogBio)
  
      const isGoodDog = document.createElement('p')
      isGoodDog.textContent = "Is Good Dog: " + (dogJs.isGoodDog ? 'Yes' : 'No')
      dogInfo.appendChild(isGoodDog)
    }
  
    renderDogList()
  })
  