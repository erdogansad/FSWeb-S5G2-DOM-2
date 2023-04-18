import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D','#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC','#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399','#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933','#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
window.addEventListener("load", (event) => {
    let title = document.querySelector(".intro > h2");
    
    setInterval(() => {
        title.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }, 500);

});

window.addEventListener("scroll", () => {
    let scroll = window.scrollY, 
        content = document.querySelector(".content-destination"),
        img = content.querySelector("img");
    

    if(scroll > 950  && scroll < 1300) {
        content.style.width = "100%";
        img.style.width = "100%";
    }else{
        content.style.width = "75%";
        img.style.width = "";
    }
});

window.addEventListener("wheel", () => {
    let content = document.querySelector(".content-pick"), i = Math.floor(Math.random() * 3);

    content.children[0].style.backgroundColor = "";
    content.children[1].style.backgroundColor = "";
    content.children[2].style.backgroundColor = "";
    content.children[i].style.backgroundColor = "lightgray";
})

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Ooops! sağ tık menüsü kapalı :)");
});

const img = document.querySelectorAll(".img-content");

img[0].addEventListener("mouseover", () => {
    img[0].children[0].style.transform = "scale(1.1)";
});

img[0].addEventListener("mouseleave", () => {
    img[0].children[0].style.transform = "scale(1)";
});

window.addEventListener("resize", () => {
    let w = window.outerWidth;
    if(w < 1024){
        img[0].children[0].style.display = "none";
        img[1].children[0].style.display = "none";
    }else{
        img[0].children[0].style.display = "inline";
        img[1].children[0].style.display = "inline";
    }
});

img[1].addEventListener("dblclick", () => {
    img[1].children[0].style.transform === "scale(1.2)" ? img[1].children[0].style.transform = "scale(1)" : img[1].children[0].style.transform = "scale(1.2)";
});

const buttons = document.getElementsByClassName("btn");

buttons[0].addEventListener("touchstart", () => {
    buttons[0].style.backgroundColor = "black";
})

buttons[0].addEventListener("touchend", () => {
    buttons[0].style.backgroundColor = "";
})