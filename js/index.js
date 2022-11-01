const share_section = document.querySelector(".card-content__footer");

var open = false;

function share() {

    open = !open;

    if (open) {
        share_section.classList.remove("off");
        share_section.classList.add("on");
    } else {
        share_section.classList.remove("on");
        share_section.classList.add("off");
    }
}