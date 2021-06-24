// Creating boilerplates

// Proper date from API
// get all products '

// *** DROPDOWN MENU
// Global Variables 
const selectTag = document.querySelector('#select-product')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')

console.log(selectTag);
console.log(form);
console.log(dataContainer);

// Make a request to dynamically create dropdown list from all the product catergories

const getProductList = async () => {
  try {
    const getProductList = 'http://makeup-api.herokuapp.com/api/v1/products.json'
    const response = await axios.get(getProductListURL);
    // console.log(response.data.message);
    const productList = Object.keys(response.data.message);
    // console.log(productList)
  } catch (error) {
    // console.error(error)
  }
}
getProductList()

// Setup Option tag Value
function setOptions(drop) {
  console.log(drop)
  list.forEach((product) =>{
    let optionTag = document.createElement('option')
    optionTag.textContent = product
    optionTag.value = product
  
    selectTag.append(optionTag)
  })
}

// create option tags from the  product list 
function getValue(e) {
  e.preventDefault()
  let optionValue = selectTag.getValue
  console.log(optionValue)
  getBreedImage(optionValue)
  return optionValue
}
// Create Event handler to grab option value 
form.addEventListener('submit', getValue)

// Make new request to select new product category 



// Render card with brand, name, description and image link


// Styling with Flexbox


// Using Axios to create search button


// Remove previous search results