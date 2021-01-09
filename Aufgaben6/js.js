
let alter_max= +prompt("Wie alt ist Max?")
let alter_moritz= +prompt("Wie alt ist Moritz?")
if (alter_max != alter_moritz) {
    if (alter_max > alter_moritz) {
        alert("Max ist älter");
    } else{
        alert("Moritz ist älter");
    }
} else {
    alert("beide sind gleich alt");
   
}


let daysofweek = [ "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
let day = new Date().getDay() 
console.log(day)
document.querySelector("span").innerText  = daysofweek[day]