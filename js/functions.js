function openImage(imageSrc, imageAlt = "Povećana slika") {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";

  // mali delay za smooth animaciju
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  modalImg.src = imageSrc;
  modalImg.alt = imageAlt;
}

function closeImage() {
  const modal = document.getElementById("imageModal");

  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
    document.getElementById("modalImg").src = "";
  }, 300);
}

// zatvaranje samo ako klikneš izvan slike
function handleModalClick(event) {
  const modalImg = document.getElementById("modalImg");

  if (!modalImg.contains(event.target)) {
    closeImage();
  }
}
