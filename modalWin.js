const modal = document.getElementById("registerModal");
const btn = document.getElementById("registerBtn");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("registerForm");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = function (e) {
    e.preventDefault();
    alert("Форма отправлена!");
    modal.style.display = "none";
}
