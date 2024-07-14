const bodyM1 = document.querySelector("body")

bodyM1.addEventListener("mousemove",(event) => {
    const xPos = event.offsetX
    const yPos = event.offsetY
    const spanM1 = document.createElement("span");
    spanM1.style.left = xPos + "px";
    spanM1.style.top = yPos + "px";
    const size = Math.random()*300;
    spanM1.style.width = size+"px"
    spanM1.style.height = size+"px"
    bodyM1.appendChild(spanM1);
    setTimeout(() =>  {
        spanM1.remove();
    }, 3000);
})