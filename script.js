function heartAnimate() {
    var page = document.querySelector(".page");
    // var img = document.querySelector(".page-img");



    function mousemoveHandle(event) {
        // img.style.top = event.y + "px"
        // img.style.left = event.x +"px"

        var newImg = document.createElement("img");
        newImg.src = "./heart.png";
        newImg.classList = "page-img";

        newImg.style.top = event.y + "px";
        newImg.style.left = event.x + "px";
        newImg.style.width = Math.random() * 100 + "px"

        page.appendChild(newImg);

        setTimeout(() => {
            newImg.remove();
        }, 3000)
    }

    page.addEventListener("mousemove", mousemoveHandle);

}

heartAnimate();