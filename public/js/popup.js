(() => {
  // <stdin>
  document.querySelectorAll(".photo img").forEach((item) => {
    item.addEventListener("click", (event) => {
      const photoUrl = event.target.getAttribute("data-popup");
      if (window.innerWidth <= 768) {
        window.location.href = photoUrl;
      } else {
        document.getElementById("popup-iframe").src = photoUrl;
        document.querySelector(".popup").classList.add("show");
      }
    });
  });
  document.querySelector(".close").addEventListener("click", () => {
    closePopup();
  });
  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      closePopup();
    }
  });
  function closePopup() {
    document.querySelector(".popup").classList.remove("show");
  }
  window.addEventListener("message", function(event) {
    if (event.data === "iframeClick") {
      closePopup();
    }
  });
})();
