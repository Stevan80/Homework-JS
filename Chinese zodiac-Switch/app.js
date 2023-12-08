console.log ("Script is a live");

let userInput = prompt("Please enter your year");

let birthYear = Number (userInput);

let chineseZodiac= (birthYear-4)%12;


switch (chineseZodiac) {
    case 0:
    console.log("Rat");
    break;
    case 1:
    console.log("Ox");
    break;
    case 2:
    console.log("Tiger");
    break;
    case 3:
    console.log("Rabbit");
    break;
    case 4:
    console.log("Dragon");
    break;
    case 5:
    console.log("Snake");
    break;
    case 6:
    console.log("Horse");
    break;
    case 7:
    console.log("Goat");
    break;
    case 8:
    console.log("Monkey");
    break;
    case 9:
    console.log("Rooster");
    break;
    case 10:
    console.log("Dog");
    break;
    case 11:
    console.log("Pig");
    break;
    default:
    console.log("birthYearInvalid");
    
       
} 
