import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
	const tasks = [
		{id: 'task-1', title: 'Купить молоко', isDone: false},
		{id: 'task-2', title: 'Погладить кота', isDone: true},
	]

	const deleteAllTasks = () => {
		console.log('deleteAllTasks');
	}

	const deleteTask = (taskId) => {
		console.log('deleteTask', taskId);
	}

	const toggleTaskComplete = (taskId, isDone) => {
		console.log('toggleTaskComplete', taskId, isDone);
	}

	const filterTasks = (query) => {
		console.log('filterTasks', query);
	}

	const addTask = () => {
		console.log('addTask');
	}

	return (
		<div className="todo">
			<h1 className="todo__title">To Do List</h1>
			<AddTaskForm addTask={addTask} />
			<SearchTaskForm onSearchInput={filterTasks} />
			<TodoInfo
			  total={tasks.length}
				done={tasks.filter(({isDone}) => isDone).length}
				onDeleteAllButtonClick={deleteAllTasks}
			/>
			<TodoList
				tasks={tasks}
				onDeleteTaskButtonClick={deleteTask}
				onTaskCompleteChange={toggleTaskComplete}
			/>
		</div>
	)
}

export default Todo
