
// Creating boilerplates
// Proper data from API
// get all products 
// *** DROPDOWN MENU
// Global Variables 
const selectTag = document.querySelector('.selections')
const form = document.querySelector('form')
const dataContainer = document.querySelector('.container')
const products = document.querySelector('.products')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const optionValue = document.querySelector('select').value
  // console.log(optionValue)
  getProductList(optionValue)
})


// Make a request to dynamically create dropdown list from all the product catergories
const getProductList = async (product) => {
  try {
    const products = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}`
    const response = await axios.get(products);
    console.log(response);
    const productTypes = response.data
    names(productTypes)
  } catch (error) {
    console.error(error)
  }
}

// Append name,description, brand, image and price

function names(listers){
  listers.forEach((names)=>{
    const brand = document.createElement("h1")
    const image = document.createElement("img")
    const name = document.createElement("h3")
    const price = document.createElement("p")
    brand.textContent = names.brand
    image.setAttribute("src", names.image_link)
    name.textContent = names.name
    price.textContent = names.price
    brand.append(image, price, name)
    products.append(brand)
  });
}

function appendProductTypes(product) {
  console.log(productTypes)
  const imageTag = document.createElement('img')
  imageTag.setAttribute('src', names.image_link)
  dataContainer.append(imageTag)
}
  // Remove search history

  button.addEventListener('click', () => {
    removeProducts()
    getData()
  })
  function removeProducts() {
    while (products.lastChild) {
      productsremoveChild(products.lastChild)
    }
  }

  // 
  document.createElement("img");

  const img = document.createElement("img");
