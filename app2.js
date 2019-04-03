var isAlive =() => {
    if(pet.hunger == 10 || pet.boredom == 10 || pet.sleepiness == 10){
        return false;
    } else {
        return true;
    }
}
let timePassing;
let seconds = -1;
let minutes = 0;
let hunger = -1;  //1-10....10 = dead
let boredom = -1;  //1-10....10 = dead
let sleepiness = -1;  //1-10....10 = dead
let age = -1;

class Tomagotchi {
    constructor(name) {
      this.name = name;
      this.hunger = 0;
      this.sleepiness = 0;
      this.boredom = 0;
      this.age = 0;
    }
}
let pet;
pet = new Tomagotchi(name);

const ageCt = () => {
   $('.age').text("Age: " + pet.age)
}
const boredomCt= () => {
   $('.boredom').text("Boredom: " + pet.boredom)
}

const sleepinessCt = () => {
   $('.sleepiness').text("Sleepiness: " + pet.sleepiness)
}
const hungerCt = () => {
   $('.hunger').text("Hunger: " + pet.hunger)
}


const secondsGoUp = () => {
    seconds++;

$('.time').text("Time: " + seconds)
    if(seconds % 5 === 0){
       pet.hunger++;

    if(pet.hunger === 10){
            myStopFunction();
        alert("your tomagotchi starved");
    }
$('.hunger').text("Hunger: " + pet.hunger + "/10");
    }if (seconds % 3 === 0){
       pet.boredom++;

    if(pet.boredom === 10){
            myStopFunction();
        alert("your tomagotchi died of boredom");

    }
$('.boredom').text("Boredom: " + pet.boredom + "/10")
    } if (seconds % 4 === 0){
       pet.sleepiness++;

    if(pet.sleepiness === 10){
            myStopFunction();
        alert("your tomagotchi died of tiredness");
    }
$('.sleepiness').text("Sleepiness: " + pet.sleepiness + "/10")
    } if (seconds % 5 === 0){
       pet.age++;
    
    if(pet.age === 15){
        alert("Your tomagotchi just morphed")
    }

    if(pet.age === 50){
            myStopFunction();
    alert("your tomagotchi died of old age");
    }
$('.age').text("Age: " + pet.age)
}}

function myStopFunction() {
    clearInterval(timePassing);
}


$('.feed-button').click(function(){
    pet.hunger = pet.hunger -3;
    console.log('feed button clicked');
});

$('.play-button').click(function(){
    pet.boredom = pet.boredom -3;
    console.log('play with button clicked');
});

$('.sleep-button').click(function(){
    pet.sleepiness = pet.boredom - 3;
    console.log('sleep button clicked');
});


$('.start').click(function(e){
   const inputName = $('#inputName').val();
    console.log(inputName);
   timePassing = setInterval(secondsGoUp, 750);

   $('#headName').text(inputName);


//     let $headName = $('#headName').text()
//    console.log($headName)
//     $headName = $inputName
})


$('.stop').click(function(){
   clearInterval(timePassing);
})