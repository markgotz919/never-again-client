'use strict';
const api = require('./api-items.js')
const ui = require('./ui-items.js')
const getFormFields = require(`../../../lib/get-form-fields`)

////// SHOW ITEMS//////

function showItems() {
  console.log("showItems")
  api.getItems()
    //.then(ui.getItemsSuccess)
    .then((result) => {
      console.log(result.items)
      const allItemsResults = result.items
      const neverAgain = allItemsResults.filter(m => m.neverAgain)
      const neverEverAgain = allItemsResults.filter(m => m.nevereEverAgain)
      const omdb = allItemsResults.filter(m => m.omdb)

      const items_list = $("<ul></ul>")
      items_list.append($("<h3>NEVER-AGAIN!</h3>"))
      for (let i = 0; i < neverAgain.length; i++) {
        let item = neverAgain[i]
        let item_li = $("<li class='never-again'></li>")
        item_li.text(`ID:${item.id}: ${item.item}, ${item.why}, ${item.number}`)
        item_li.id = item.id
        items_list.append(item_li)
      }
      items_list.append($("<h3>NEVER-EVER-AGAIN!</h3>"))
      for (let i = 0; i < neverEverAgain.length; i++) {
        let item = neverEverAgain[i]
        let item_li = $("<li class='never-ever-again'></li>")
        item_li.text(`ID:${item.id}: ${item.item}, ${item.why}, ${item.number}`)
        item_li.id = item.id
        items_list.append(item_li)
      }
      items_list.append($("<h3>OVER MY DEAD BODY!</h3>"))
      for (let i = 0; i < omdb.length; i++) {
        let item = omdb[i]
        let item_li = $("<li class='omdb'></li>")
        item_li.text(`ID:${item.id}: ${item.item}, ${item.why}, ${item.number}`)
        item_li.id = item.id
        items_list.append(item_li)
      }

      $("#items").html(items_list);
      // $("#items button").click(randomMealPick)
    })


    .catch(ui.getItemsFailure)
}

////// ADD  ITEM//////

const addItem = function (event) {
  event.preventDefault()
  // console.log("addItem")
  const data = getFormFields(this)
  // console.log(data)
  api.addItem(data)
    .then((result) => {
      console.log(result)
      //newItem = result
      ui.addItemSuccess(this)
    })

    .catch(ui.addItemFailure)
}

 ////// DELETE AN ITEM//////

const deleteItem = function (event) {
  event.preventDefault()
  console.log("deleteItem")
  const data = getFormFields(this)
  api.deleteItem(data)
  .then((result) => {
    
    console.log(result)
    //newItem = result
    ui.deleteItemSuccess(this)
  })
    .catch(ui.deleteItemFailure)
}
////// UPDATE AN ITEM//////
const updateItem = function (event) {
    event.preventDefault()
    console.log("updateItem")
    const data = getFormFields(this)
    console.log(data)
    api.updateItem(data)
    .then((result) => {
      console.log(result)
      
      ui.updateItemSuccess(this)
    })
    .catch(ui.updateItemFailure)
  }



const itemHandlers = () => {
  $('#show-items').click(showItems)
  $('#new-item').on('submit', addItem)
  $('#delete-item').on('submit', deleteItem)
  $('#update-item').on('submit', updateItem)

}

module.exports = {
  itemHandlers
}
