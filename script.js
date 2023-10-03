const trott = (func, delay) => {
    let prev = 0;
    return(...args) => {
        let now = new Date().getTime();
        if(now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};
document.querySelector(".center").addEventListener("mousemove",trott((dets) => {
    var div = document.createElement("div");
    div.classList.add("imgdiv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var img = document.createElement("img")
    img.setAttribute("src", "https://images.unsplash.com/photo-1695681675989-7b03f0dfffd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")
    div.appendChild(img);


    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: "power1",
        duration: .6,
    });
    gsap.to(img, {
        y: "100%",
        delay: .3,
        ease: "power2",
        duration: .6,
    });



    setTimeout(function(){
        div.remove();
    }, 2000)
}, 400)
);