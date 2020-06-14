const actionPanel1Element = document.getElementById('actionPanel1');
const btnClear = document.querySelector('.btn-clear');
const inputElement = document.getElementById('input');
const listElement = document.getElementById('list');
const btnAddTodo = document.querySelector('.add-todo');
let error = document.querySelector('.error');
const todoList = localStorage.storeNotes ? JSON.parse(localStorage.storeNotes) : [];


inputElement.focus();

if(localStorage.storeNotes) {
	printNotes(todoList);
}

inputElement.addEventListener('keydown', function() {
	error.innerHTML = '';
});

document.forms[0].addEventListener('submit', (e) => {
	e.preventDefault();

	const todo = e.target.elements.todo.value.trim();

	if (todo === '') {
		error.innerHTML = 'Please enter value';
		return;
	}

	todoList.unshift({
		id: Date.now(),
		title: todo,
		done: false
	});
	
	localStorage.storeNotes = JSON.stringify(todoList);
	printNotes(todoList);

	e.target.reset();
});

function printNotes(notes) {
	let noteString = '';

	todoList.forEach(todoitem => {
		noteString += `<li class="list-group-item">
							<label class="item-text">${todoitem.title}</label>
							<input class="form-control col-5 edit-input sr-only" value="${todoitem.title}" type="text" style="display: inline;">
							<div class="input-group-prepend btns-todo-item" style="float: right;">
								<button class="btn btn-outline-info sr-only update" data-id="${todoitem.id}">Update</button>
								<button class="btn btn-outline-warning edit">Edit</button>
								<button class="btn btn-outline-success done" done="${todoitem.done}">Done</button>
								<button class="btn btn-outline-danger remove" data-id="${todoitem.id}">Remove</button>
							</div>
						</li>`;
	});

	document.querySelector('#list').innerHTML = noteString;
}


listElement.addEventListener('click', (e) => {

	if(e.target.classList.contains('done')) {
		let done_btn = e.target;
		done_btn.done = !done_btn.done;
		let todo_title = done_btn.parentNode.parentNode.querySelector('.item-text');
		todo_title.classList.toggle('todoDone');

		if(done_btn.done) {
			done_btn.classList.remove('btn-outline-success');
			done_btn.classList.add('btn-outline-info');
			done_btn.textContent = 'Restore';
		} else {
			done_btn.classList.add('btn-outline-success');
			done_btn.classList.remove('btn-outline-info');
			done_btn.textContent = 'Done';
		}
	}

	if(e.target.classList.contains('remove')) {
		let remove_btn = e.target;
		let todo_id = +remove_btn.getAttribute('data-id');
		
		todoList.forEach((el, i) => {
			if(el.id === todo_id) {
				todoList.splice(i, 1);
			}
		});
		localStorage.storeNotes = JSON.stringify(todoList);
		printNotes(todoList);
	}

	if(e.target.classList.contains('edit')) {
		let edit_btn = e.target;
		let update_btn = edit_btn.previousElementSibling;
		let edit_input = edit_btn.parentNode.parentNode.querySelector('.edit-input');
		let todo_title = edit_input.previousElementSibling;
		
		todo_title.classList.add('sr-only');
		edit_input.classList.remove('sr-only');
		update_btn.classList.remove('sr-only');
		edit_btn.classList.add('sr-only');
	}

	if(e.target.classList.contains('update')) {
		let update_btn = e.target;
		let edit_btn = update_btn.nextElementSibling;
		let todo_id = +update_btn.getAttribute('data-id');
		let edit_input = update_btn.parentNode.parentNode.querySelector('.edit-input');
		let todo_title = edit_input.previousElementSibling;
		let value = edit_input.value.trim();
		
		if(value === '') {
			return;
		}

		
		todoList.forEach(el => {
			if(el.id === todo_id) {
				el.title = value;
			}
		});
		todo_title.classList.remove('sr-only');
		edit_input.classList.add('sr-only');
		update_btn.classList.add('sr-only');
		edit_btn.classList.remove('sr-only');
		localStorage.storeNotes = JSON.stringify(todoList);
		printNotes(todoList);
	}

	
});




document.querySelector('.btn-clear').addEventListener('click', function() {
	todoList.splice(0, todoList.length);
	localStorage.storeNotes = JSON.stringify(todoList);
	printNotes(todoList);
});
