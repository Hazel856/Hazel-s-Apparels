"use strict";
document.addEventListener("DOMContentLoaded", function(){
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-icon-div");
    const searchWarning = document.querySelector(".search-warning");
    const errorText =  document.querySelector(".error-text");
    const searchDiv =  document.querySelector(".search-icon-div");
    
    searchWarning.classList.add("off");
    errorText.classList.add("off");
    
    
    
    let parsedEmail = [];
    let link = ".com";
    let at = "@";
    const disappearingMessage = function() {
        errorText.classList.add("off");
    }
    
    let checkString = function(string) {
        if(string.includes(link)&&string.includes(at)&&string.length > 7){
            // console.log(`correct`);
            errorText.classList.remove("off");
            searchWarning.classList.add("off");
            errorText.textContent = `email sent sucessfully !`;
            errorText.classList.toggle("disappearing");
            // setInterval(disappearingMessage, 2000);
            searchDiv.classList.remove("search-icon-error");
            
            
        }else if(!string.includes(link)||!string.includes(at)||string.length < 7) {
            searchWarning.classList.remove("off");
            searchDiv.classList.add("search-icon-error");
            
            errorText.classList.remove("off");
            errorText.textContent = `please provide a valid email !`;
            errorText.classList.toggle("disappearing");
            
            
        }
    }
    
    
    // const inputEmail = "hazel";
    searchBtn.addEventListener("click", function(e){
        e.preventDefault();
        const inputEmail = searchBox.value;
        checkString(inputEmail);
        
        // clearInterval(disappearingMessage);
        
        searchBox.value = "";
        
        // console.log(parsedEmail);
    });
    
    errorText.classList.remove("disappearing");














});



// function FirstFactorial(num) { 

//     // code goes here
//     let counter = 1;
//     let arrNumSplit = [];
//     for(let i = 1; i<= num; i++) {
//       arrNumSplit.push(i);
//     //   console.log(i);
//     }
//     for (let i = 0; i < arrNumSplit.length; i++) {
//       counter *= arrNumSplit[i];
//         console.log(counter);
//     }
//     return counter; 
  
//   }
     
 
//   console.log(FirstFactorial(4));