const notes = JSON.parse(localStorage.getItem('list_notes')) || [];
const notesDiv = document.querySelector('#notesDiv')

render()

document.querySelector('#addButton').onclick = () => {
   const data = new Date
   let title = document.querySelector('#titleInput')
   let content = document.querySelector('#contentInput')
   const date = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`

   if(content.value != ''){
      notes.unshift({title: title.value, content: content.value, data: date})
      title.value = ''
      content.value = ''
      render() 
   }
   saveToStorage()
}


function render(){

   notesDiv.innerHTML = ''

   for (const note of notes) {
      const noteElement = document.createElement('div')
      noteElement.setAttribute('class', 'noteBox')
      const titleElement = document.createElement('div')
      titleElement.setAttribute('class', 'titleNote')
      titleElement.innerText = note.title
      const contentElement = document.createElement('div')
      contentElement.setAttribute('class', 'contentNote')
      contentElement.innerText = note.content
      const footerElement = document.createElement('div')
      footerElement.setAttribute('class', 'footerNote')
      const dateElement = document.createElement('div')
      dateElement.setAttribute('class', 'date')
      dateElement.innerText = note.data
      const delElement = document.createElement('button')
      delElement.setAttribute('class', 'delButton')
      delElement.setAttribute('onclick', `deleteNote(${notes.indexOf(note)})`)
      delElement.innerText = 'x'
      notesDiv.appendChild(noteElement)
      noteElement.appendChild(titleElement)
      noteElement.appendChild(contentElement)
      noteElement.appendChild(footerElement)
      footerElement.appendChild(dateElement)
      footerElement.appendChild(delElement)
   }
}

function deleteNote(pos){
   notes.splice(pos, 1)
   saveToStorage()
   render()
}

function saveToStorage(){
	localStorage.setItem('list_notes', JSON.stringify(notes));

}