



var todoList = {
    todos:[],
    displayTodos:function (){
        console.log(this.todos);
        //alert(this.todos);
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
        console.log(todosUl);
        for(var i=0; i < todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            todoLi.textContent = todoList.todos[i];
            todosUl.appendChild(todoLi);

        }

    }
}

document.querySelector('.new-todo').addEventListener('keypress', function (e) {
    var todoText =  document.getElementById('txt-addtodo').value;

    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      todoList.addTodo(todoText);
        viewtodoList.displayTodos();
    }
});

