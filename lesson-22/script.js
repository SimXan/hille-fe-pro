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
							<div class="input-group-prepend" style="float: right;">
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

	
});

document.querySelector('.btn-clear').addEventListener('click', function() {
	todoList.splice(0, todoList.length);
	localStorage.storeNotes = JSON.stringify(todoList);
	printNotes(todoList);
});
