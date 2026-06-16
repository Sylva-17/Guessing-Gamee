const min = 1;
const max  = 100;
let number = Math.random() *(max -min +1);

function ggg(){
    let myguess = Number(document.getElementById("num").value);

    if(myguess == number){

        document.getElementById("answer").textContent = " GG ! click on replay to play another round";

    }else if(number<myguess){
        document.getElementById("answer").textContent = " TOO HIGH ! TRY AGIAN";
    }else if(number>myguess){
        document.getElementById("answer").textContent = " TOO LOW ! TRY AGIAN";
    }
}
function round(){
    number = Math.floor(Math.random() * 100) + 1;
    document.getElementById("num").value = "";
    document.getElementById("answer").textContent = "";
    
}
document.getElementById("num").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        ggg();
    }
});