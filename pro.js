let submit = document.querySelector(".btn");
let form = document.querySelector("form");
let post = document.querySelector(".post");
let stars = document.querySelector(".star-widget");
let exit = document.querySelector(".exit");
submit.addEventListener("click",()=>{
    form.style.display="none";
    stars.style.display="none";
    post.style.display="block";

});
exit.addEventListener("click",()=>{
    form.style.display="block";
    stars.style.display="block";
    post.style.display="none";
})