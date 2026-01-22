const container = document.querySelector(".container");
const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    container.classList.toggle("active");
});
