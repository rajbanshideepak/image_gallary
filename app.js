const FullImgDiv = document.querySelector("#fullImg");
const FullImg = document.querySelector("#largeImage");
function imageClose() {
    FullImgDiv.style.display = "none"
}
function openFull(ele) {
    FullImgDiv.style.display = "flex";
    FullImg.src = ele.getAttribute('src')
}