const popUp = document.getElementById("popUpCertification");
const figure = popUp.querySelector(".popUpContent");
const caption = document.getElementById("caption");
const certificationContainer = document.getElementById("listOfCertification").children;

function showCertification (src, altText){
    popUp.style.display = "flex";
    figure.innerHTML = `<img src="${src}" alt="${altText}">`;
    caption.textContent = altText;
}

popUp.addEventListener("click", () => {
    popUp.style.display = "none";
}
)

function certificationFilter(target){
    if (!target.trim()) {
        for (let child of certificationContainer) {
            child.style.display = "";
        }
    }
    else{
        targetElement = `[class ~= "${target}"]`;
        for (let child of certificationContainer){
            child.style.display = "";
            if (!child.matches(targetElement)){
                child.style.display = "none";
            }
        }
    }
}