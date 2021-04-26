const name = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise";

function writeCards (name, event) {
    for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    };
}
writeCards(name, event);


function countDown(){
 let number = 4;
 while (number >= 0) {
     console.log (number--)
 }
}

countDown();

