'use strict';

const store = require('./store')

const authEvents = require('./auth/events')
// const mealEvents = require('./items/events-meals.js')



$(() => {
  console.log(authEvents)
//   mealEvents.mealHandlers()
  authEvents.addHandlers()
$("#change-password, #sign-out").hide();
$("#new-meal").hide();
$("#show-meals").hide();
$("#delete-meal").hide();
$("#update-meal").hide()
})

 ///function to display message
  
 function messageDisplay(message) {
    console.log(message)
  }