// Ude Import export (MANDATORY)

import  navbar from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar();


 async function teslaNews(){

    try{
    let search = document.querySelector("#search_input").value;
    
    let res = await fetch("https://masai-mock-api.herokuapp.com/news?q=");
    let data = await res.json();

    console.log(data);
    
    }catch(err){
        console.log(err);
    }
    
     }