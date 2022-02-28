// var randNum;

// // function getRandomNum(min, max){
// //     return Math.floor(Math.random()*(max-min+1) + min)
// // }
// var bodytemp = 35;
// var fishes = 0;

// while (bodytemp > 25) {
//     randNum = Math.floor(Math.random()*2+1);
//     console.log(randNum);
//     var fishbet = prompt("Want to fish for 10 min? (y/n)");
//     if (fishbet === 'y' && randNum == 1)
//     {
//         bodytemp--;
//         fishes++;
//         alert("Got a fish! Body temp: " + bodytemp);
//     }
//     else if (fishbet == 'n' && (randNum == 1 || randNum == 2))
//     {
//         console.log("ylempi no play");
//         alert("Wise decision to leave before it's too late. Your total fishes: " + fishes);
//         break;    
//     }
//     else if (fishbet == 'y' && randNum == 2)
//     {
//         bodytemp--;
//         alert("No fish. Body temp: " + bodytemp);
//     }
//     else
//     {
//         console.log("alempi no play");
//         alert("No play, no game");
//         break;
//     }
// }
// if (bodytemp == 25) {
//     alert("Brrr! You got hypothermy. You lost all your " + fishes + "fishes!");
// }

var randNum;
var bodytemp = 35;
var fishes = 0;

while (bodytemp > 25) {
    randNum = Math.floor(Math.random()*2+1);
    console.log(randNum);
    var fishbet = prompt("Haluatko pilkkiä tovin? Paina k (kyllä) tai e (ei).");
    if (fishbet === 'k' && randNum == 1)
    {
        bodytemp--;
        fishes++;
        alert("Sait kalan! Ruumiinlämpösi: " + bodytemp);
    }
    else if (fishbet == 'e' && fishes == 0)
    {
        alert("Mikä hätänä?");
        break;
    }
    else if (fishbet == 'e' && (randNum == 1 || randNum == 2))
    {
        alert("Viisas päätös kääntyä takaisin rantaan kun vielä voi. Sait mukaasi " + fishes + " kalaa!");
        break;    
    }
    else if (fishbet == 'k' && randNum == 2)
    {
        bodytemp--;
        alert("Ei tärppejä. Ruumiinlämpösi: " + bodytemp);
    }

}
if (bodytemp == 25) {
    alert("Hrrr! Sait hypotermian ja menetit kaikki " + fishes + "kalasi!");
}



