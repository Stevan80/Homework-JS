console.log ("Script is a live");



function calculateDogHumanAge(age,input) {

    let dogAge = age * 7;
    if(input==="Dog years")
    console.log("Dog is " + dogAge +  " year old in dog years") ;

    let humanAge = age /7;
    if(input==="Human years")
    console.log("Dog is " + humanAge +  " year old in human years") ;
      
  }

  calculateDogHumanAge (4,"Dog years");
  calculateDogHumanAge (14, "Human years");

