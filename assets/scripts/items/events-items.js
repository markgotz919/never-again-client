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
      const neverAgain = allItemsResults.filter(m => m.never)
      const neverEverAgain = allItemsResults.filter(m => m.never_ever)
      const omdb = allItemsResults.filter(m => m.omdb)
      console.log("")
      const items_list = $("<div></div>")
      items_list.append($("<h3>NEVER-AGAIN!</h3>"))
      let table = $("<table>")
      for (let i = 0; i < neverAgain.length; i++) {
        let item = neverAgain[i]
        let item_li = $("<tr class='never-again'></tr>")
        item_li.html(`<td>ID:${item.id}</td><td>${item.title}</td><td>${item.why}</td><td><img src="assets/icons/icon${item.number}.png"/></td>`)
        item_li.id = item.id
        table.append(item_li)
      }
      items_list.append(table)
      items_list.append($("<h3>NEVER-EVER-AGAIN!</h3>"))
      table = $("<table>")
      for (let i = 0; i < neverEverAgain.length; i++) {
        let item = neverEverAgain[i]
        let item_li = $("<tr class='never-again'></tr>")
        item_li.html(`<td>ID:${item.id}</td><td>${item.title}</td><td>${item.why}</td><td><img src="public/icon${item.number}.png"/></td>`)
        item_li.id = item.id
        table.append(item_li)
      }
      items_list.append(table)
      items_list.append($("<h3>OVER MY DEAD BODY!</h3>"))
      table = $("<table>")
      for (let i = 0; i < omdb.length; i++) {
        let item = omdb[i]
        let item_li = $("<tr class='never-again'></tr>")
        item_li.html(`<td>ID:${item.id}</td><td>${item.title}</td><td>${item.why}</td><td><img src="public/icon${item.number}.png"/></td>`)
        item_li.id = item.id
        table.append(item_li)
      }
      items_list.append(table)

      console.log("items-list", items_list)
      
      $("#items").html(items_list).show();
    
    })


    .catch(ui.getItemsFailure)
}

////// ADD  ITEM//////

const addItem = function (event) {
  event.preventDefault()
  // console.log("addItem")
  const data = getFormFields(this)
  console.log(data)
  if (!data.item.never && !data.item.never_ever && !data.item.omdb){
   return ui.incompleteForm();
  }
  console.log(data)
  
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
  console.log(data)
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
  $('#delete-item').on('click', deleteItem)
  $('#update-item').on('submit', updateItem)

}

module.exports = {
  itemHandlers
}
