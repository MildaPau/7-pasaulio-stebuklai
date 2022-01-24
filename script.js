"use strict"

function changeContent(index, id){
    var sections = document.querySelectorAll("section");
    var buttons = document.querySelectorAll("button");


    for (let i = 0; i < sections.length; i++){
        sections[i].classList.remove("display");
        buttons[i].classList.remove("active");
    }


    var element = document.getElementById(id);
    element.classList.add("display");
    buttons[index].classList.add("active");

    setTimeout(function(){
        sections[index].style.opacity = 0.5;
    }, 100);
    setTimeout(function(){
        sections[index].style.opacity = 1;
    }, 200);

}
