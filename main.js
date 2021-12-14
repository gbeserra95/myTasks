// Global variables
var myLocalStorage = 'myLocalStorage'
var btnAdd = document.getElementById('btnAdd')

// Update list
function updateList(arg) {
  // ul
  let myList = document.querySelector('#list ul')

  let myJSON = JSON.parse(localStorage.getItem(myLocalStorage))
  let index = myJSON.length

  myList.innerHTML = ''
  let counter = 0

  for (let element of myJSON) {
    //li
    let newItem = document.createElement('li')
    newItem.id = element.id
    newItem.setAttribute('draggable', true)

    //div
    let newDiv = document.createElement('div')
    //checkbox
    let newInput = document.createElement('input')
    newInput.id = `input${counter}`
    //label
    let newLabel = document.createElement('label')
    //task
    let textNode = element.task
    //icon
    let newIcon = document.createElement('i')

    //checkbox attributes
    newInput.setAttribute('type', 'checkbox')
    newInput.setAttribute('value', textNode)
    newInput.classList.add('checkbox')

    //label attributes
    newLabel.setAttribute('for', `input${counter}`)
    newLabel.innerHTML = textNode

    newIcon.classList.add('icon-trash')

    if (element.status == 'checked') {
      newInput.checked = true
      newLabel.style.textDecoration = 'line-through'
    }

    newDiv.appendChild(newInput)
    newDiv.appendChild(newLabel)

    newItem.appendChild(newDiv)
    newItem.appendChild(newIcon)

    myList.appendChild(newItem)

    counter++
  }

  // Check - Uncheck items
  let listItems = document.getElementsByClassName('checkbox')

  for (let i = 0; i < listItems.length; i++) {
    let element = listItems[i]

    element.addEventListener('change', function () {
      let myLabel = this.nextElementSibling
      let myParent = myLabel.parentElement

      if (this.checked) {
        myLabel.style.textDecoration = 'line-through'
        myJSON[i].status = 'checked'
        localStorage.setItem(myLocalStorage, JSON.stringify(myJSON))
      } else {
        myLabel.style.textDecoration = 'none'
        myJSON[i].status = 'unchecked'
        localStorage.setItem(myLocalStorage, JSON.stringify(myJSON))
      }
    })
  }

  // Delete tasks
  let trashIcons = document.getElementsByTagName('i')

  for (let i = 0; i < trashIcons.length; i++) {
    let element = trashIcons[i]
    let liID = element.parentElement.id

    element.addEventListener('click', function () {
      myJSON.splice(i, 1)
      for (let j = 0; j < myJSON.length; j++) {
        myJSON[j].id = `task${j}`
      }
      localStorage.setItem(myLocalStorage, JSON.stringify(myJSON))
      updateList()
    })
  }

  // Drag and Drop items
  let myItems = document.getElementsByTagName('LI')
  let originID, targetID, tempObject
  for (let item of myItems) {
    item.addEventListener('dragstart', function () {
      this.style.opacity = '0.5'
      this.style.backgroundColor = 'rgb(119, 217, 112)'

      originID = this.id.match(/\d+/g)
      tempObject = {
        task: myJSON[originID].task,
        status: myJSON[originID].status
      }
    })
    item.addEventListener('dragend', function (e) {
      this.style.opacity = ''
    })
    item.addEventListener('dragover', function (e) {
      e.preventDefault()
    })
    item.addEventListener('dragenter', function (e) {
      this.style.backgroundColor = 'violet'
    })
    item.addEventListener('dragleave', function (e) {
      this.style.backgroundColor = 'rgb(238, 238, 238)'
    })
    item.addEventListener('drop', function () {
      targetID = this.id.match(/\d+/g)

      myJSON[originID].task = myJSON[targetID].task
      myJSON[originID].status = myJSON[targetID].status

      myJSON[targetID].task = tempObject.task
      myJSON[targetID].status = tempObject.status

      localStorage.setItem(myLocalStorage, JSON.stringify(myJSON))
      updateList()
    })
  }

  if (arg) {
    return [index, myJSON]
  } else {
    return 0
  }
}

window.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    btnAdd.click()
  }
})

window.addEventListener('load', function () {
  let order, myObject
  // Call upateList when window is loaded
  if (this.localStorage.getItem(myLocalStorage)) {
    ;[order, myObject] = updateList(true)
  } else {
    order = 0
    myObject = []
    this.localStorage.setItem(myLocalStorage, '[]')
  }

  // Save a new task on your local storage
  let textInput = document.getElementById('newTask')

  textInput.addEventListener('input', function () {
    if (textInput.value.trim() != '') {
      btnAdd.disabled = false
    } else {
      btnAdd.disabled = true
    }
  })

  btnAdd.addEventListener('click', function () {
    ;[order, myObject] = updateList(true)

    let value = {
      id: `task${order}`,
      task: textInput.value.trim(),
      status: 'unchecked'
    }

    myObject.push(value)
    localStorage.setItem(myLocalStorage, JSON.stringify(myObject))
    textInput.value = ''
    btnAdd.disabled = true

    updateList(false)
  })
})
