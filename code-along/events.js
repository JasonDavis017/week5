// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

// Get a reference to the 'click me' button
let clickMeButton = document.querySelector(`.click-me`)

// Event listener for 'click me' button
clickMeButton.addEventListener(`click`, async function(event){
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)

  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`
})

// Get a reference to the 'add movie' button
let addMovieLink = document.querySelector(`.add-movie`)

// Event listener for 'add movie' button
addMovieLink.addEventListener(`click`, async function(event){

  //Prevent the link's default behavior (which is to go to Google)
  event.preventDefault()

  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)
})

// Get a reference to the 'zoom image' button
let zoomImageButton = document.querySelector(`.zoom-image`)

//Event listener for the 'zoom image' button
zoomImageButton.addEventListener(`click`, async function(event){
  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Add the `border-pink-500` class to the image element
  image.classList.add(`border-pink-500`)

  // Make the image full screen
  // image.classList.remove(`w-96`)
  // image.classList.add(`w-full`)

  image.classList.toggle(`w-96`)
  image.classList.toggle(`w-full`)
})

// Get a reference to the 'change image' button
let changeImageButton = document.querySelector(`.change-image`)

// Event listener for the 'change image' button
changeImageButton.addEventListener(`click`, async function(event){
  let image = document.querySelector(`img`)
  image.setAttribute(`src`, `../images/grogu2.jpg`)
})

// Get a reference to the 'say hi' button
let sayHiButton = document.querySelector(`.say-hi`)

sayHiButton.addEventListener(`click`, async function(event){
  //Prevent query added to url
  event.preventDefault()

  // Get a refernce to the input field that holds the first name
  let nameInput = document.querySelector(`#first-name`)

  // Get the value from the input field
  let firstName = nameInput.value

  // Get a ref to the 'greet' element
  let greetElement = document.querySelector(`.greet`)

  // First name should have a value
  if(firstName.length > 0){
    // Create a sentence to put in the 'greet' element
    let sentence = (`Hi, ${firstName}`)

    // Set the 'greet' element's HTML to the sentence
    greetElement.innerHTML = sentence
  } else{
    greetElement.innerHTML = ``
  }

  

  console.log(`The form was submitted.`)
})