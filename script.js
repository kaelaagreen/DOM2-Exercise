"use strict";

document.querySelector("#ABCs").addEventListener("click", function (event){
    event.preventDefault();
    document.querySelector("#letters").style.display = "block";
    document.querySelector("#numbers").style.display = "none";

    document.querySelector("#links").style.display = "none";
});

document.querySelector("#easyAs123").addEventListener("click", function (event){
    event.preventDefault();
    document.querySelector("#numbers").style.display = "block";
    document.querySelector("#letters").style.display = "none";
    document.querySelector("#links").style.display = "none";
});

document.querySelector("#menu").addEventListener("click", function(){
    document.querySelector("#links").style.display = "block";
})