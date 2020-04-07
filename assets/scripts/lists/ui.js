'use strict'
const showlistTemplate = require('../templates/shopping-list.handlebars')
const store = require('../store')

const failure = (error) => {
  console.log(error)
}
const getListSuccess = (data) => {
  const createList = showlistTemplate({
    lists: data.lists.filter(x => x.user.id === store.user.id)
  })
  $('.content').html(createList)
  document.getElementById('add-list').display = 'block'
  document.getElementById('add-list').reset()
  document.getElementById('update-list').reset()
  document.getElementById('content').style.position = 'relative'
}

const getEditList = (data) => {
  document.getElementById('update-list').style.display = 'block'
  document.getElementById('content').style.position = 'none'
  const nameField = document.getElementById('editname')
  const idField = document.getElementById('editid')
  const budgetField = document.getElementById('editbudget')
  const userIDField = document.getElementById('edituserid')
  nameField.value = data.list.name
  idField.value = data.list.id
  budgetField.value = data.list.budget
  userIDField.value = data.list.user.id
}

const closeForm = () => {
  document.getElementById('update-list').style.display = 'none'
  document.getElementById('content').style.position = 'relative'
}

module.exports = {
  failure,
  getListSuccess,
  getEditList,
  closeForm
}
