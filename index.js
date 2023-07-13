const cards = document.querySelector(".cards");

import {featuredItems} from "./data.js"

// function sendSession(id){
//   sessionStorage.setItem("product-description", id)
// }
// console.log(sendSession)

function createCard(title, imageUrl, productId) {
  // console.log(sendSession)
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  const cardButton = document.createElement("a"); // Change button to anchor element
  cardButton.classList.add("card-button");
  cardButton.textContent = "Buy Now";
  // cardButton.setAttribute("id", id)
  ; // Set the href to the specified URL
  cardButton.addEventListener("click", function(){
    console.log(productId);
    sessionStorage.setItem("product-description", productId);
  });
  cardButton.href = "product-description.html"
  cardBody.appendChild(cardButton);
}


for (let i = 0; i < featuredItems.length; i++) {
  createCard(featuredItems[i].name, featuredItems[i].picture, featuredItems[i].id);
}

