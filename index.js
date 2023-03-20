// Write your code here!
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove();
}

const name = "Kush Muhamad"; 
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = `${name} is the champion`;
