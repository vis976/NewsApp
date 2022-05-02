// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import  navbar from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar();


document.querySelector("#search_input").value;

async function searchedNew() {

let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=");

let data = res.json();

console.log(data);

}