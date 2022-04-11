const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click",
function(){
    // Prelevo il nome dell utente
    const userName = document.getElementById("username").value;
    console.log(userName);

    //VISUALIZZARE IL NOME 
    const greetinguserName = document.querySelector(".container-uno h5");
    greetinguserName.innerHTML = ` ${userName}`;
    

    // prelevo i km che deve percorrere
    const formKm = document.getElementById("formkm").value;
    console.log(formKm);

    // prelevo la fascia d'eta
    const userAge = document.getElementById("userage").value;
    console.log(userAge);

    let fullPrice = formKm * 0.21 ;

    if(userAge == `minorenne`){
        fullPrice = fullPrice - (fullPrice * 20 / 100);
    } else if (userAge == `over 65`){
        fullPrice = fullPrice - (fullPrice * 40 / 100);
    }
    console.log(fullPrice);

    // Visualizzo nella pagina le risposte degli dell'utente
    // -inserire le rispsote negli elementi
    const greetingResponse = document.querySelector(".container-cinque h5");
    console.log(greetingResponse);
    greetingResponse.innerHTML = ` ${fullPrice}&euro; `;
    
    

    
    
    // CARROZZA 
    const randomNumber3 =Math.floor(Math.random()*10)+1;
    console.log(randomNumber3);

    const greetingResponse3 = document.querySelector(".container-tre h5");
    console.log(greetingResponse3);
    greetingResponse3.innerHTML = ` ${randomNumber3} `;


    // CODICE CP
    const randomNumber =Math.floor(Math.random()*100000)+1;
    console.log(randomNumber);

    const greetingResponse2 = document.querySelector(".container-quattro h5");
    console.log(greetingResponse2);
    greetingResponse2.innerHTML = ` ${randomNumber} `;


}
)