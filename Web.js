
let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");


console.log(card);
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
   about.style.display="none"


    
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="rgb(2, 173, 173)";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"


}
function shops(){
mainPage.style.display="none";
blog.style.display="none";
about.style.display="none"
card.style.display="block";
card2.style.display="block";

 
document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="rgb(2, 173, 173)";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"


}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="block";
   about.style.display="none"
    

document.getElementById("blog").style.color="rgb(2, 173, 173)";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"

 



}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="block"

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="rgb(2, 173, 173)"

}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="block"

document.getElementById("blog").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("shop").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black"
document.getElementById("contact").style.color="rgb(2, 173, 173)"

}

// cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none"
    document.querySelector(".cart").style.display="flex"
}


function addCart(){
    alert("Added To Cart");
    location.reload()
}

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});