// Function to add a new task to the list
function addTask() {
    const input = document.getElementById('newTask');
    const taskText = input.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const listItem = document.createElement('li');
  
      listItem.innerHTML = `
        <input type="text" value="${taskText}" readonly>
        <button class="edit-button" onclick="editTask(this)">Edit</button>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
      `;
  
      taskList.appendChild(listItem);
      input.value = '';
    }
  }
  
  // Function to edit a task
  function editTask(editButton) {
    const listItem = editButton.parentNode;
    const input = listItem.querySelector('input');
  
    if (listItem.classList.contains('editing')) {
      listItem.classList.remove('editing');
      input.setAttribute('readonly', true);
      editButton.innerText = 'Edit';
    } else {
      listItem.classList.add('editing');
      input.removeAttribute('readonly');
      input.focus();
      editButton.innerText = 'Save';
    }
  }
  
  // Function to delete a task
  function deleteTask(deleteButton) {
    const listItem = deleteButton.parentNode;
    const taskList = document.getElementById('taskList');
  
    taskList.removeChild(listItem);
  }
  