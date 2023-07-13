import { sizes, featuredItems } from "./data.js";

const productDescription = document.querySelector(".product-description");
const productImage = document.querySelector(".productImage");

const localValue = sessionStorage.getItem("product-description");
console.log(localValue);
const id = Number(localValue) - 1;

function createProductDescription(title, imageUrl, money) {
    
  const productDescriptionTitle = document.createElement("h2");
  productDescriptionTitle.classList.add("productDescriptionTitle");
  productDescriptionTitle.textContent = title;
  productImage.appendChild(productDescriptionTitle);
  
  const productDescriptionImage = document.createElement("img");
  productDescriptionImage.src = imageUrl; // Set the src property instead of backgroundImage
  productDescriptionImage.classList.add("productDescriptionImage");
  productImage.appendChild(productDescriptionImage);
  const productDescriptionButton = document.createElement("button");
  productDescriptionButton.classList.add("product-button");
  productDescriptionButton.textContent = money;
  productDescription.appendChild(productDescriptionButton);
}

createProductDescription(
  featuredItems[id].name,
  featuredItems[id].picture,
  featuredItems[id].price
);
