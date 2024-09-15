function heartAnimate() {
    var page = document.querySelector(".page");
    // var img = document.querySelector(".page-img");
    
    var newImg = document.createElement("img");
    newImg.src = "./heart.png";
    newImg.classList = "page-img";

    function mousemoveHandle(event){
        newImg.style.top = event.y + "px"
        newImg.style.left = event.x +"px"

        page.appendChild(newImg);
    }

    page.addEventListener("mousemove",mousemoveHandle);

}

heartAnimate();