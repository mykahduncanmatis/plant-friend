var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

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

