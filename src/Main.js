document.addEventListener("keydown", (e) => {
  // check if the key pressed is the right arrow
  if (e.code == "ArrowRight") {
    nextChap();
  }
  if (e.code == "ArrowLeft") {
    prevChap();
  }
});

function nextChap() {
  $(".list-group-item.disabled").prev()[0].click();
}
function prevChap() {
  $(".list-group-item.disabled").next()[0].click();
}

// add an html element below the body
function addElement(el, text) {
  var newElement = document.createElement(el);
  // make newElement style display fixed
  newElement.style.position = "fixed";
  newElement.style.backgroundColor = "white";
  newElement.style.color = "black";
  newElement.style.padding = "10px";
  newElement.style.borderRadius = "5px";
  newElement.style.zIndex = "9999";
  newElement.style.top = "2px";
  newElement.style.right = "2px";
  newElement.style.fontSize = "1.1rem";
  newElement.style.fontWeight = "bold";
  newElement.innerHTML = text;

  document.body.appendChild(newElement);

  newElement.innerHTML += `<div style="display: flex; gap: 1rem;">
    <button id="nextChap">
      Next chapter
    </button>
    <button id="prevChap">
      Previous chapter
    </button>
  </div>`;

  // appendChild newElement as sibling
}

// unicode right arrow
const rightArrow = String.fromCharCode(0x25b6);
const leftArrow = String.fromCharCode(0x25c0);
addElement("div", `Bấm ${rightArrow} / ${leftArrow} để chuyển chap `);
$("#nextChap").click(nextChap);
$("#prevChap").click(prevChap);
