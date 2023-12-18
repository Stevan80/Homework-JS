console.log ("Script is a live");

//---------Homework #1----------//

/*function tellStory ([name, mood, activity]) {

    let storyMade=`This is ${name}.${name} is a nice person. Today he is ${mood}. He ${activity} all day. The end.`;
    
    return storyMade;
}

let story=tellStory(["Stevan","tired","played football"]);
console.log(story);*/



//---------Homework #2----------//

/*function sumArray (numArray) {

let sum=0;

for (const value of numArray){

    sum+=value;
}
    return(sum)

}
let sumResults=sumArray([5,10,15,20,25])
console.log ("The sum of array is " + sumResults);*/


//---------BONUS----------//


/*function validateNumber(numbers) {
    let sum=0;

    for (let i = 0; i < numbers.length; i++) {
        if (!validateNumber(numbers[i]))
  
    return typeof Number.isNaN(numbers);
}
    
}    

    
let invalidNum=validateNumber([5,10,15,20,25])
console.log(invalidNum);*/



//---------Homework #3----------//

/*function oneBigString(arrayStrings) {
    
    let result = arrayStrings.join(` `); //Izguglav za JOIN :)//
    return result;
}

let inputArray = ["Hello", "there", "students", "of", "SEDC", "!"];
let result = oneBigString(inputArray);
console.log(result);*/



//---------Homework #4----------//

/*for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
    console.log(i + " is even"); 
    } else {
    console.log(i + " is odd");
    }
}*/


//---------Homework #5----------//



/*function calculateMaxMinSum (numArray){

    let maxNumber=numArray[0];
    let minNumber=numArray[0];
   

    for (let i=0; i<numArray.length; i++)

    if (numArray[i]>maxNumber){
        maxNumber=numArray[i];
    }
    else if (numArray[i]<minNumber){
        minNumber=numArray[i];
    }

    let sumMaxMin = maxNumber + minNumber;

    return "Max is " + maxNumber + ", Min is " + minNumber + ", Sum is " + sumMaxMin;
}
    let arrays = [3, 5, 6, 8, 11];
    let results = calculateMaxMinSum(arrays);
    console.log(results);*/



//---------Homework #6----------//

/*function studentsFirstNamesLastNames(firstNames, lastNames){

let firstLastNames=[];

for (let i=0; i<firstNames.length;i++) {

    let names=i+1;
    let fullName= names + "." + firstNames[i] + lastNames[i];

    firstLastNames.push(fullName);
}

return firstLastNames;
}

let firstNames = ["Bob", "Jill"]
let lastNames = ["Gregory", "Wurtz"]
let firstAndLastnames=studentsFirstNamesLastNames(firstNames,lastNames);
console.log (firstAndLastnames);*/