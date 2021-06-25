
// Creating boilerplates
// Proper data from API
// get all products 
// *** DROPDOWN MENU
// Global Variables 
const selectTag = document.querySelector('.selections')
const form = document.querySelector('form')
const dataContainer = document.querySelector('.container')
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
  } catch (error) {
    console.error(error)
  }
}
// Setup Option tag Value


// function names(listers){
//   listers.forEach((names)=>{
//       const options = document.createElement("option")
//       options.textContent = names.name;
//       options.value = names.id
//       select.append(options);
//   });
//   }
// create option tags from the  product list 


// Create Event handler to grab option value 




// Styling with Flexbox


// Using Axios to create search button


// Remove previous search results

// Make new request to select new product category 