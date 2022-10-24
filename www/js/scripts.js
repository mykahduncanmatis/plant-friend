var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

var waterlevel = 20;
var nowater = 0;
var drowning = 40;

var neardeath = false //starts healthy so near death is false. This is boolean

function dryout() {
  waterlevel--; //every time this func runs, water level decreases by 1
  console.log(waterlevel)
  checkhealth();
  var watertimer = setTimeout(dryout,500); // for timing (example on w3 schools setTimeout()) in milliseconds
}

dryout() //call function after it is declared

function checkhealth() {
  if(waterlevel <= nowater)  {
    neardeath = true;
    console.log("help!")
    $("#plant path").css("fill", "#D2691E")
  }
}

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

