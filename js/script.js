const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click",
function(){
    // Prelevo il nome dell utente
    const userName = document.getElementById("username").value;
    console.log(userName);

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
    const greetingResponse = document.querySelector(".result h2");
    console.log(greetingResponse);
    greetingResponse.innerHTML = `Ciao ${fullPrice}`

}
)