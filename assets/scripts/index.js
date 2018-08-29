'use strict';

const store = require('./store')

const authEvents = require('./auth/events')
const itemEvents = require('./items/events-items.js')



$(() => {
  // console.log(authEvents)
 itemEvents.itemHandlers();
  authEvents.addHandlers();
$("#change-password, #sign-out").hide();
$("#new-item").hide();
$("#show-items").hide();
$("#delete-item").hide();
$("#update-item").hide()
$("body").removeClass("startUp")
$("#new-item input[type='checkbox'], #update-item input[type='checkbox']").on("focus", handleCheckBoxes);
})

 ///function to display message
  
 function messageDisplay(message) {
    // console.log(message)
  }

  function handleCheckBoxes(e){ 
    e.target.parentElement.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
      // console.log(checkbox,e.target);
      if(checkbox.id===e.target.id){
        e.target.checked=true;
      }
      else{
        checkbox.checked=false;
      }
    });
  }