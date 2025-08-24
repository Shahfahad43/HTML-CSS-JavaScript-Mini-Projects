// Step 1: Get the elements from HTML
const textInput = document.getElementById("textInput");
const genBtn = document.getElementById("genBtn");
const qrImage = document.getElementById("qrImage");

// Step 2: Add click event to button
genBtn.addEventListener("click", () => {
  // Step 3: Get the text from input
  const text = textInput.value.trim(); // it will remove the spaces;

  if (text == "" || text.length >= 1) {
    alert("Please enter text or paste URL to get your QR Code.");
    return;
  }

  // Step 4: Create QR image generating link
  // encodeURLComponent() makes the text safe for URLs.
  const qrAPI =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(text);

  //Step 5: Set the image source to APIs image
  qrImage.src = qrAPI;
});
