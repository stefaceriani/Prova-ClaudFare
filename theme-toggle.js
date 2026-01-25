const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    btn.textContent = document.body.classList.contains("dark") ? "🔆" : "🌒";

});
