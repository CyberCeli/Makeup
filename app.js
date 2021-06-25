// Creating boilerplates

// Proper date from API
// get all products '

// *** DROPDOWN MENU
// Global Variables 
const selectTag = document.querySelector('.selections')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#container')


// Make a request to dynamically create dropdown list from all the product catergories

const getProductList = async () => {
  try {
    const products = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type' 
    const response = await axios.get(products);
    console.log(response.data);
    const productList = response.data.message;
    // console.log(productList)
   
  } catch (error) {
    console.error(error)
  }
}
getProductList()


// Setup Option tag Value
function setOptions(drop) {
  console.log(drop)
  list.forEach((products) =>{
    let optionTag = document.createElement('option')
    optionTag.textContent = product
    optionTag.value = product
    selectTag.append(optionTag)
  })
}

// function names(listers){
//   listers.forEach((names)=>{
//       const options = document.createElement("option")
//       options.textContent = names.name;
//       options.value = names.id
//       select.append(options);
//   });
//   }
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




// Render card with brand, name, description and image link
async function getProductImage(productValue) {
  try {
    let imageURL = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`
    const response = await axios.get(imageURL)
  console.log(response.data.id)
  // removeElement(container)
  appendImage(response)
} catch (error) {
  console.error(error);
}
}

// Image tag
function appendImage(img) {
  console.log(img)
  const imageTag = document.createElement('img')
  imageTag.setAttribute('src', img)
  dataContainer.append(imageTag)
}

// Styling with Flexbox


// Using Axios to create search button


// Remove previous search results

// Make new request to select new product category 