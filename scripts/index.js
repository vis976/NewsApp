// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import  navbar from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar();


 async function searchNews(){

try{
let search = document.querySelector("#search_input").value;

let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${search}`);

let data = await res.json();

console.log(data)

}catch(err){
    console.log(err);
}

 }

 async function teslaNews(){

    try{
    let search = document.querySelector("#search_input").value;
    
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${search}`);
    let data = await res.json();

    console.log(data);
    
    }catch(err){
        console.log(err);
    }
    
     }