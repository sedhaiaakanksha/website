// javaScript to add functionality to search button
function search() {
  console.log("called");
  const searchInput = document.querySelector(".search").value.toLowerCase();
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    const productDesc = product
      .querySelector(".desc p")
      .innerText.toLowerCase();
    if (productDesc.includes(searchInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

//To show "Added" message when you click on Add to cart
const allButtons = document.querySelectorAll(".btn1 button");

allButtons.forEach((button) => {
  console.log("clicked");
  button.addEventListener("click", () => {
    button.classList.add("ADDEDCART");
    button.innerHTML = "Added ✅";
    button.style.boxShadow = "0 0 15px 2px orange";

    setTimeout(() => {
      button.innerHTML = "Add to cart";
      button.classList.remove("ADDEDCART");
      button.style.boxShadow = "none";
    }, 1600);
  });
});
//To show a popup when you click buy now
console.log("hello");
      var popupmenu = document.querySelector(".buyNowPopup");
      var close = document.querySelector(".popupActions button");

      var popupBtn = document.querySelectorAll(".btn2 button");
      popupBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          console.log("clicked");
          popupmenu.style.display = "block";
          popupmenu.style.opacity = "1";
        });
      });
      close.addEventListener("click", () => {
        popupmenu.style.display = "none";
        popupmenu.style.opacity = "0";
      });
