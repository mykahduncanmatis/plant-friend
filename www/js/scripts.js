var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

//water level thresholds
var waterlevel = 20;
var nowater = 0;
var drowning = 40;

//nutrient thresholds
var food = 30;
var nofood = 0; 
var overfeed = 40;


var neardeath = false; //starts healthy so near death is false. This is boolean
var trimmed = false;

function dryout() {
  waterlevel--; //every time this func runs, water level decreases by 1
  console.log(waterlevel)
  checkhealth();
  var watertimer = setTimeout(dryout,500); // for timing (example on w3 schools setTimeout()) in milliseconds
}

dryout() //call function after it is declared

function starving(){
  food--;
 // console.log(food);
  checkhealth();
  var foodtimer = setTimeout(starving,500);
}

starving();

function checkhealth() {
  if(waterlevel <= nowater || waterlevel >= drowning || food <= nofood )  {
    neardeath = true;
    console.log("help!")
    $("#plant path").css("fill", "#D2691E")
  } 
  if (neardeath && waterlevel > nowater && food > nofood) { //recovery
    $("#plant path").css("fill", "#568b62")
    neardeath = false;
    setTimeout(function() {  //cut branch grows back
      $("#trim").fadeIn(300);
      trimmed = false;
    }, 5000)
  }
}

$("#water-me").on("click", function(){            //attach to water button with id=water-me
  waterlevel += 20;                               //water level increases on button click
  $("#water").fadeIn().delay(3000).fadeOut()       //watering icon display
})                                        

$("#feed-me").on("click", function(){          
  food += 20;                               
  $("#food").fadeIn().delay(3000).fadeOut()       
}) 

$("#trim-me").on("click", function() {
  trimmed = true;
  $("#scissors").fadeIn().delay(3000).fadeOut();
  $("#trim").fadeOut(3000);
})

// by default:
// - plants starts healthy
// - dry out over time
// - deplete in nutrients over time

// interactions:
// - water it, replenish it
// - feed it, nutrients for the plant
// - trim it

// care: 
// - too much water, plant near death
// - too much fertilizer, plant near death
// - if plant falls into near death state, you can only heal it by trimming it

