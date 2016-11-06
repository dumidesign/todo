// add todo

//var todos = [];
//
//function addTodo(item){
//    todos.push(item);
//    displayTodos();
//}
//
//// display todo items
//
//function displayTodos(){
//console.log(todos);
//}
//
//// change todo
//
//function changeTodo(position,value){
//   todos[position]= value;
//    displayTodos();
//}
//
//// delete todo
//
//function deleteTodo(position){
//    todos.splice(position,1);
//    displayTodos();
//}

var todoList = {
    todos:[],
    displayTodos:function (){
        console.log(this.todos);
        for(var i=0; i < this.todos.length; i++){
            this.todos[i];
        }
    },
    addTodo:function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo:function(position,value){
        this.todos[position]= value;
        this.displayTodos();
    },
    deleteTodo:function(position){
        this.todos.splice(position,1);
            this.displayTodos();

    }

}

var viewtodoList ={
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML='';
        for(var i=0; i > todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            todoLi.textContent = todoList.todos[i];
            todosUl.appendChild(todoLi);

        }

    }
}