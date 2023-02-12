console.log("test");







const btnChange = document.querySelector("#navChange");
btnChange.addEventListener("click", changeHome);

// change me drücken

function changeHome() {
  console.log("in function changeHome");

  // home button Farbe ändern
const navHome = document.querySelector("#navHome");
navHome.style.backgroundColor = "red";
navHome.style.color = "black";
navHome.innerHTML = textUmdrehen(navHome.innerHTML); // Funktion aufrufen und den Text "Home" übergeben



// home button text umdrehen
function textUmdrehen(textZumUmdrehen) {
const text = textZumUmdrehen;               // textZumUmdrehen ist der Text zum Umdrehen   
console.log(text);
console.log(typeof(text)); // string

const textArray = text.split("");
console.log(textArray) // [H , o , m , e]
const textArrayRückwerts = textArray.reverse()
console.log(textArrayRückwerts)  // [m, e, o, H]
const textNeuerString = textArrayRückwerts.join("")   // macht aus Array String und macht , Kommas weg
console.log(textNeuerString) //emoH

return textNeuerString;

}


}

changeHome();