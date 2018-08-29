const updateSuccess = function () {
    $('#message').text('your never-again has been updated')
    $('#message').css('background-color', 'green')
    
  }
  
  const updateFailure = function (error) {
    $('#message').text('Error on update')
    $('#message').css('background-color', 'red')
    form.reset()
    
  }
  
  const getItemsSuccess = function (data){
    // console.log("get never-agains successful",data)
  
  }
  
  function getItemsFailure(error){
    // console.log(error)
    $('#message').text('Error on retrieval')
    $('#message').css('background-color', 'red')
  }
  
  function addItemSuccess(form){
    $('#message').text('Your never-again has been added. Good luck!')
    $('#message').css('background-color', 'green')
    form.reset()
    $('#show-items').click()
  }
  
  function addItemFailure(error){
    // console.log(error)
    $('#message').text('Error on adding never-again')
    $('#message').css('background-color', 'red')
    form.reset()  
  }
  
  function incompleteForm() {
    $('#message').text('Please select at least one checkbox')
    $('#message').css('background-color', 'red')
  }
  function deleteItemSuccess(form){
    $('#message').text('Your never-again has been deleted. God help you!')
    $('#message').css('background-color', 'green')
    form.reset()
    $('#show-items').click()
  
  }


  
  function deleteItemFailure(error){
    // console.log("failure")
    // console.log(error)
    $('#message').text('Error on deleting')
    $('#message').css('background-color', 'red')
    $('#delete-item').trigger('reset')
  }
  
  
  
  function updateItemSuccess(form){
    // console.log(this)
    $('#message').text('Your item has been updated.')
    $('#message').css('background-color', 'green')
    form.reset()
    $('#show-items').click()
  
  }
  
  
  function updateItemFailure(error){
    // console.log(error)
    $('#message').text('Error on updating item')
    $('#message').css('background-color', 'red')
    $('#update-meal').trigger('reset')
    
  }
  
  
  module.exports = {
    updateSuccess,
    updateFailure,
    addItemSuccess,
    addItemFailure,
    incompleteForm,
    deleteItemSuccess,
    updateItemSuccess,
    updateItemFailure,
    deleteItemFailure
    
  }