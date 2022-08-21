window.onscroll = function() { myFunction() };

function myFunction() {
    var navbar = document.getElementById("myheader");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = " colorheader" + " animate-header" + " w3-card";
    } else {
        navbar.className = navbar.className.replace("colorheader animate-header w3-card", "")
    }
}

// thay doi anh
var index = 1;

let change = function changeImg() {

    var imgs = ["./assets/img/changeimg/img1.jpg", "./assets/img/changeimg/img2.jpg", "./assets/img/changeimg/img3.jpg"]
    document.getElementById("myimg").src = imgs[index];
    index++;
    if (index == 3) {
        index = 0;
    }

}
setInterval(change, 2000)