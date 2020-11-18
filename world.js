"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    
    let btn = document.querySelector('#lookup');  
    
    btn.addEventListener('click', ()=>{
        console.log("Lookup button clicked");     
        
        //code to get entered value
        let entry = document.querySelector('#country').value;

        //code to update search params
         const params = new URLSearchParams({country: entry});
     
         //code to define url with params in String format
         const url = `http://localhost/info2180-lab5/world.php?${params.toString()}`;
         
         //code to update browser url
         let stateObj = {id:"100"};
         window.history.pushState(stateObj, "Country Query", url);
     
         //code to fetch data
     
         fetch(url, {method: 'GET'})
             .then(response => {
                 console.log(response);
                     if (response.ok) {
                         return response.text()
                     } else {
                         return Promise.reject("Something went wrong")
                     }
             })
             .then(data => {
                     let results = document.querySelector('#result');
                     results.innerHTML = data;       
             })
             .catch(error => console.log(error));
  
})
})

          
    
