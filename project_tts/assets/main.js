window.onscroll = function() { myFunction() };

function myFunction() {
    var navbar = document.getElementById("myheader");
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        navbar.className = " colorheader" + " animate-header" + " w3-card";
    } else {
        navbar.className = navbar.className.replace("colorheader animate-header w3-card", "")
    }
}
// open-menu mobie

function js_open() {
    document.getElementById("myhome").style.display = "block";
    document.getElementById("p").style.display = "block";
    document.querySelector("body").style.overflow = "hidden"


}

function js_close() {
    document.getElementById("myhome").style.display = "none";
    document.getElementById("p").style.display = "none";
    document.querySelector("body").style.overflow = "unset"
}


// thay doi anh
// var index = 1;

// let change = function changeImg() {

//     var imgs = ["./assets/img/changeimg/img1.jpg", "./assets/img/changeimg/img2.jpg", "./assets/img/changeimg/img3.jpg"]
//     document.getElementById("myimg").src = imgs[index];
//     index++;
//     if (index == 3) {
//         index = 0;
//     }


// }
// setInterval(change, 2000)
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}