'use strict';

const store = require('./store')

const authEvents = require('./auth/events')
const itemEvents = require('./items/events-items.js')



$(() => {
  console.log(authEvents)
 itemEvents.itemHandlers();
  authEvents.addHandlers();
$("#change-password, #sign-out").hide();
$("#new-item").hide();
$("#show-items").hide();
$("#delete-item").hide();
$("#update-item").hide()
$("body").removeClass("startUp")
})

 ///function to display message
  
 function messageDisplay(message) {
    console.log(message)
  }