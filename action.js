function declineAction() {
  
  document.querySelector("h2").remove();
  document.querySelector("p").remove();
  document.querySelector(".button-container").remove();

  
  let chiri = document.getElementById("chiri");

  
  chiri.classList.add("chiri-grow");

 
  let message = document.createElement("div");
  message.classList.add("message");
  message.innerText = "hihi you never deserved me anyway ♥";
  document.getElementById("airdrop").appendChild(message);
  message.style.display = "block";
  message.style.fontSize = "12px";
  message.style.fontWeight = "lighter";

  
}

function typeMessage(text, speed) {
  let msg = document.createElement("div");
  msg.classList.add("msg");
  document.body.appendChild(msg);

  let i = 0;
  function type() {
      if (i < text.length) {
          msg.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
      }
  }
  type();
}



function createNavigationButtons() {
  let navContainer = document.createElement("div");
  navContainer.classList.add("navigation");

  let leftArrow = document.createElement("button");
  leftArrow.classList.add("left-arrow");
  leftArrow.innerHTML = "<";
  leftArrow.onclick = () => changePart(-1);

  let rightArrow = document.createElement("button");
  rightArrow.classList.add("right-arrow");
  rightArrow.innerHTML = ">";
  rightArrow.onclick = () => changePart(1);

  navContainer.appendChild(leftArrow);
  navContainer.appendChild(rightArrow);
  document.body.appendChild(navContainer);

  navContainer.style.display = "none"; 
}



function acceptAction() {


  document.querySelector(".navigation").style.display = "flex"; 


  document.getElementById("chiri-head").style.display = "block";


typeMessage("Hi, I'm Chiri! Nice to meet you!", 80);

let bg = document.getElementById("airdrop");
let chiri = document.getElementById("chiri-second");

if (bg) {
    bg.remove(); 
}

let popup = document.createElement("div");
popup.classList.add("popup-bg");
document.body.appendChild(popup);


chiri.style.display="block";
chiri.style.width = "150px"; 
chiri.style.height = "auto";
chiri.style.position = "absolute";
chiri.style.top = "50%";
chiri.style.left = "50%";
chiri.style.transform = "translate(-50%, -50%)"; 
chiri.style.zIndex = "10";

 
  

  let selectionContainer = document.querySelector(".selection-container");
  if (selectionContainer) {
      selectionContainer.style.display = "flex";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".selection-box");
  const popupBg = document.querySelector(".popup-bg");

  buttons.forEach(button => {
      button.addEventListener("click", function(event) {
          event.stopPropagation();

          
          buttons.forEach(btn => {
              btn.style.transform = "scale(1)";
              btn.style.opacity = "0.7"; 
          });

         
          this.style.transform = "scale(1.2)";
          this.style.opacity = "1";
      });
  });

 
  document.addEventListener("click", function(event) {
      if (!event.target.classList.contains("selection-box")) { 
          buttons.forEach(btn => {
              btn.style.transform = "scale(1)";
              btn.style.opacity = "1";  
          });
      }
  });
});
let selectedPart = "head";
let hairIndex = 0, outfitIndex = 0, petIndex=0, bgIndex = 0;

const heads = [
    "images/head1r.png", "images/head2r.png", "images/head3r.png",
    "images/head4r.png", "images/head5r.png", "images/head6r.png"
];
const outfits = [
  "images/o1.png", "images/o3.png",
  "images/o4.png", "images/o5.png", "images/o6.png"
];
const pets = [
  "images/p1.png", "images/p2.png",
  "images/p3.png","images/p4.png", "images/p5.png", "images/p6.png"
];
const bgs=[
  "images/b1.png","images/b2.png","images/b3.png","images/b4.png","images/city.webp"
];

// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("hairBox").addEventListener("click", () => setSelectedPart("head"));
//     document.getElementById("outfitBox").addEventListener("click", () => setSelectedPart("outfit"));
//     document.getElementById("bgBox").addEventListener("click", () => setSelectedPart("background"));

//     createNavigationButtons();
// });

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("hairBox").addEventListener("click", () => setSelectedPart("head"));
  document.getElementById("outfitBox").addEventListener("click", () => setSelectedPart("outfit"));
  document.getElementById("petBox").addEventListener("click", () => setSelectedPart("pet"));
  document.getElementById("bgBox").addEventListener("click", () => setSelectedPart("bg"));

  createNavigationButtons(); 
  
  document.getElementById("chiri-head").style.display = "none";
  document.getElementById("chiri-outfit").style.display = "none";
  document.getElementById("chiri-pet").style.display = "none";
  document.getElementById("chiri-bg").style.display = "none";
});


function setSelectedPart(part) {
    selectedPart = part;
    console.log("Selected part:", selectedPart);
}


function changePart(direction) {
  let chiriHead = document.getElementById("chiri-head");
  let chiriOutfit = document.getElementById("chiri-outfit");
  let chiriPet = document.getElementById("chiri-pet");
  let chiriBG = document.getElementById("chiri-bg");

  if (selectedPart === "head") {
      hairIndex = (hairIndex + direction + heads.length) % heads.length;
      chiriHead.src = heads[hairIndex]; 
      chiriHead.style.display = "block"; 
  } else if (selectedPart === "outfit") {
      outfitIndex = (outfitIndex + direction + outfits.length) % outfits.length;
      chiriOutfit.src = outfits[outfitIndex];
      chiriOutfit.style.display = "block"; 
  } else if (selectedPart === "pet") {
    petIndex = (petIndex + direction + pets.length) % pets.length;
    chiriPet.src = pets[petIndex];
    chiriPet.style.display = "block"; 
  }else if (selectedPart === "bg") {
    bgIndex = (bgIndex + direction + bgs.length) % bgs.length;
    document.body.style.backgroundImage = `url('${bgs[bgIndex]}')`; 
}
}

