document.addEventListener("DOMContentLoaded", function () {
    const dedicationButton = document.getElementById("dedicationButton");
    const dedicationText = document.getElementById("dedicationText");

    dedicationButton.addEventListener("click", function() {
        dedicationText.classList.remove("hidden");
    });

    console.log("script.js cargado correctamente");
});
