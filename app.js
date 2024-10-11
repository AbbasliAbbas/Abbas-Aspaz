const select = document.querySelectorAll(".panel");

select.forEach((panel) => {
    panel.addEventListener("click", () => {
        panel.classList.toggle("active");
    })
})

console.log(select)
