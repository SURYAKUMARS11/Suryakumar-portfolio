
var sidenav = document.querySelector(".sidenav-items");

var menubar = document.querySelector(".menubar").addEventListener("click", function(){
    sidenav.style.marginLeft = "0px";
});

    

var crossbtn = document.getElementById("crossbtn").addEventListener("click" , function(){
    sidenav.style.marginLeft = "-80%"
})




var itemcontainer = document.querySelector(".sidenav-items");

document.querySelectorAll(".item").forEach(function(item) {
    item.addEventListener("click", function(){
        itemcontainer.style.marginLeft = "-80%";
        console.log("yes");
    });
});

