const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const sizes = document.getElementById("sizes");
const qrContainer = document.getElementById("qrContainer");
const colorPicker = document.getElementById("colorPicker");

let size = sizes.value;
sizes.addEventListener("change", (e) => {
  size = e.target.value;
  ifEmptyInput();
});

downloadBtn.addEventListener("click", () => {
  let img = document.querySelector(".qrBody img");

  let imgAttribute = img.getAttribute("src");
  if (img !== null) {
    downloadBtn.setAttribute("href", imgAttribute);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ifEmptyInput();
});

function ifEmptyInput() {
  //The below is called as Ternary operations and the easy way to write conditional operations.
  // if the length of the qrText is greater than one then generate the qrcode otherwise make an alert.

  qrText.value.length > 0
    ? generateQRCode()
    : alert("Please write something or paste a URL to generate QR Code.");
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    // create an option to change the color of the QR Code
    colorDark: colorPicker.value,
    colorLight: "#ffffff",
  });
}
