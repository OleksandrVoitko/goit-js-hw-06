const liItemRef = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liItemRef.length}`);

liItemRef.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`); 
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
