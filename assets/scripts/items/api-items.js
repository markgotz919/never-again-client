const config = require("../config")
const store = require("../store")

// CREATE ITEM

const addItem  = function (data) {
  console.log("reached create")
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

}

//DELETE ITEM

const deleteItem = function (data) {
  console.log("reached delete")
  console.log(data)
  return $.ajax({
    url: config.apiUrl +'/items/'+  data.item.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' +store.user.token
    },  
    data
  })

}

//UPDATE ITEM

const updateItem = function (data) {
 
  return $.ajax({
    url: config.apiUrl + '/items/'+ data.item.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

//GET ITEMS

const getItems = function () {
  console.log("this is api-itmes, get items")
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    
    // data: data
  })
}



module.exports = {
  addItem,
  updateItem,
  getItems,
  deleteItem

}
