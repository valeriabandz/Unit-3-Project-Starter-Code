let TrixPath = document.querySelector(".path1");
let TrixScreen = document.querySelector(".trix-screen");
let trixie = document.querySelector(".trixie");
let appleButton = document.querySelector(".apple");
let cupcakeButton = document.querySelector(".cupcake");
let appleScreen = document.querySelector(".apple-end");
let apple = document.querySelector(".apple");
let cupcakeScreen = document.querySelector(".cupcake-end");
let cupcake = document.querySelector(".cupcake");
let MuffinPath = document.querySelector(".path2");
let MuffinScreen = document.querySelector(".muffin-screen");
let muffinman = document.querySelector(".muffin-man");
let muffinbutton = document.querySelector(".muffin-option");
let muffinEnd = document.querySelector(".muffin-end");
let cliff = document.querySelector(".cliff");
let gingerButton = document.querySelector(".ginger-option");
let gingerEnd = document.querySelector(".ginger-end");
let gingerbread = document.querySelector(".gingerbread");

TrixPath.onclick = function() {
    TrixScreen.style.display = "block";
    // trixie.style.display = "block";
    // appleButton.style.display = "block";
    // cupcakeButton.style.display = "block";
};

MuffinPath.onclick = function() {
    MuffinScreen.style.display = "block";
    muffinman.style.display = "block";
    muffinbutton.style.display = "block";
    gingerButton.style.display = "block";
};

appleButton.onclick = function() {
    appleScreen.style.display = "block";
};

cupcakeButton.onclick = function() {
    cupcakeScreen.style.display = "block";
}; 

muffinbutton.onclick = function() {
    muffinEnd.style.display = "block";
    cliff.style.display = "block";
};

gingerButton.onclick = function() {
    gingerEnd.style.display = "block";
    gingerbread.style.display = "block";
};