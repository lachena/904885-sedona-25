var feedback = document.querySelector(".map-modal");
var popup = document.querySelector(".feedback-field");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".feedback-close");
var user = document.querySelector(".feedback-area");
var form = document.querySelector(".feedback-form");
var mail = document.querySelector(".email-area");

feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.add("overlay-show");
    popup.classList.add("modal-show");
    user.focus();
})
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
})
form.addEventListener("submit", function(evt) {
    if (!user.value || !mail.value){
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
})
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
})