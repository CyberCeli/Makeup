# Project Overview

## Project Name
Makeup Page
https://cyberceli.github.io/Makeup/

## Project Description

The user will be capable to browse and serach different makeup catergories by types or if looking for certain makeup that are vegan or hyerallegenic, as well as view pricing and a description to the makeup. User will be able to favoritve products and be able to sign up with their email on the homepage.

## API and Data Sample

[api docs](https://makeup-api.herokuapp.com/)

[request](http://makeup-api.herokuapp.com/api/v1/products.json)

![Screen Shot 2021-06-22 at 7 58 38 AM](https://user-images.githubusercontent.com/86305867/122938095-b8115780-d32f-11eb-96bb-27fd07b45d0b.png)


## Wireframes
![Screen Shot 2021-06-21 at 5 35 01 PM](https://user-images.githubusercontent.com/86305867/122937543-4cc78580-d32f-11eb-9f70-70356a24d9c0.png)




### MVP/PostMVP


#### MVP 

- Allow user to search product type with drop down menu
- render card with brand, name, description, price and imagine link
- Remove previous search results
- Style Card with Flexbox


#### PostMVP  

- Look into localstorage so you can save data to the user's browser
- Add a second API.
- Search function to be able to look up different ingredients(such as if it's hyperallerginic) and types
- Add creative use of event listeners and UI interaction.
- Add animations.

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|June 23| Pseudocode / actual code | Incomplete
|June 24| Initial Clickable Model  | Incomplete
|June 25| MVP | Incomplete
|June 28| Presentations | Incomplete

## Priority Matrix

![Screen Shot 2021-06-22 at 7 56 35 AM](https://user-images.githubusercontent.com/86305867/122937740-6f599e80-d32f-11eb-9e45-4987d715a30c.png)



## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Creating Functional buttons  | H | 4hrs| 4.5hrs | 3.5hrs  |
| navigation/dropdown bar with correct data | M | 3hrs| 4 hrs | 4 hrs|
| Grabbing proper data with API | H | 4hrs| 5hrs | 5hrs |
| Grabbing data for search box | M | 3hrs| 5hrs | 4hrs |
| Styling with flex box for products | H | 3hrs| 3.5hrs | 3.5hrs |
| Using Axios to extract makeup data | H | 5hrs| 4hrs | 4hrs |
| Add local storage | L|  3.5 hrs | :---: | :---: |
| Creating boilerplate,html,css, js| H|  5hrs| 4hrs | 4hrs |
| Adding Favortives function| M |  4.5hrs | 0 | :---: |
| Work on layout in CSS| M |  4hrs | 4.5hrs | 4.5hrs|
| Create email input| L |  3.5hrs | 0 | :---: |
| Total | H | 42.5hrs| 34.5 | 34.5 |

## Code Snippet

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

## Change Log

|6/32 | JavaScript |  Coding/ dropdown menu | :---: | :---: |
|6/24 | JS,CSS, HTML |  | Adding button, css styling, api data transfer | :---: |
|6/25 |JS |  Api data transfer |  | :---: |
|6/25 | JS |  Dropdown Menu | :---: | :---: |
|6/26 | CSS |  Styling  | :---: | :---: |
|6/26 | JS |  appending previous element remove element | :---: | :---: |
