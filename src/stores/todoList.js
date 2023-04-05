import { defineStore } from 'pinia'
import { ref } from "vue";


export const useTodosStore = defineStore('todos',()=> {
    const todos = ref([]);
    const renderedTodos = ref([]);
    const filter = ref('all');
    const sort = ref("-");


const setTodos = (todosAPI)=>{
    todos.value = todosAPI;
    console.log(todos.value)
}
const setRenderedTodos = ()=>{
    renderedTodos.value = todos.value;
    console.log(renderedTodos.value)
}
const deleteTodo = (todo) => {
    console.log(todos.value);
    // console.log(todo);
    todos.value = todos.value.value.filter(
        (renderedTodoIterate) => 
        {
            console.log(renderedTodoIterate)
            return renderedTodoIterate.id !== todo.id
        }
        );
        // console.log(todos[0].id)
        // debugger;
    renderedTodos.value.value = todos;
  };
  const editTodo = (todo) => {
    todo.isEditable = !todo.isEditable;
  };
  const toggleStatus = (todo) => {
    todo.completed = !todo.completed;
  };
  const addTodo = (todoText) => {
    if (todoText)
    {
      const id = Math.random() * 1000000;
      const newTodo = {
        completed: false,
        id: id,
        title: todoText,
        userId: id,
      };
      todos.value.value.push(newTodo);
    //   console.log(todos.value);
      filterByStatus();
      sortMethod();
    }
  };
  const filterByStatus = (selectedFilter) => {
      if(selectedFilter)
      filter.value = selectedFilter;
    if (filter.value == "all") {
      renderedTodos.value.value = todos.value.value;
    } else if (filter.value == "incompleted") {
      renderedTodos.value.value = todos.value.value.filter(
        (renderedTodo) => renderedTodo.completed === false
      );
    } else if (filter.value == "completed") {
      renderedTodos.value.value = todos.value.value.filter(
        (renderedTodo) => renderedTodo.completed === true
      );
    }
  };
  const sortMethod = (selectedSort) => {
    if(selectedSort)
    sort.value = selectedSort;
    if (sort.value == "name") {
      renderedTodos.value.value.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort.value == "completed") {
      renderedTodos.value.value.sort(function (a, b) {
        return b.completed - a.completed;
      });
    } else if (sort.value == "incompleted") {
      renderedTodos.value.value.sort(function (a, b) {
        return a.completed - b.completed;
      });
    }
  };
    return { todos, renderedTodos ,deleteTodo ,editTodo,toggleStatus,addTodo,filterByStatus ,sortMethod,setTodos,setRenderedTodos }
  })