// todo JS functionality

var todoList = {
    todos:[],
    displayTodos:function (){
        //console.log(this.todos);
        //alert(this.todos);
        for(var i=0; i < this.todos.length; i++){
            this.todos[i];

        }
    },
    addTodo:function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    // TODO not completed
    changeTodo:function(position,value){
        this.todos[position]= value;
        this.displayTodos();
    },
    // TODO not completed
    deleteTodo:function(position){
        this.todos.splice(position,1);
        this.displayTodos();

    }

}

var viewtodoList ={
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML='';
        //console.log(todosUl);
        for(var i=0; i < todoList.todos.length; i++){

            // need to move this to fucntion
            var todoLi = document.createElement('li');
            var radioBox = document.createElement('input');

            var deleteBtn = document.createElement('button');
            var itemPosition = todoList.todos.indexOf(todoList.todos[i]);
            deleteBtn.textContent ='x';
            deleteBtn.id = itemPosition;
            deleteBtn.className = 'deleteBtn';
           // deleteBtn.onclick = alert("dfdfd");

            // put the array postion to hidden field
            //var hiddenBox = document.createElement('input');
            //hiddenBox.type = 'hidden';
            //hiddenBox.name = 'hid_id'+ itemPosition;
            //hiddenBox.id = 'hid_id'+ itemPosition;
            //hiddenBox.value = itemPosition;
            //console.log(itemPosition);
            //radioBox.type ='radio';
            //radioBox.id = todoList.todos[i];
            todoLi.textContent = todoList.todos[i];
            todoLi.id = itemPosition;

            //todoLi.appendChild(radioBox);
            todoLi.appendChild(deleteBtn);
            //todoLi.appendChild(hiddenBox);
            todosUl.appendChild(todoLi);

        }

    }
}

document.querySelector('.new-todo').addEventListener('keypress', function (ev) {
    var todoText =  document.getElementById('txt-addtodo').value;
   // var todoText2 =  document.getElementById(todoList.todos[i]).value;
   // console.log(itemPosition);
    var key = ev.which || ev.keyCode;
    if (key === 13) { // 13 is enter
      todoList.addTodo(todoText);
        viewtodoList.displayTodos();

    }
});

//document.querySelector('.deleteBtn').addEventListener('click',function(){

document.querySelector('ul').addEventListener('click',function(ev){
    var btnId =  ev.toElement.id
    //console.log(btnId);
    //console.log(ev);
    todoList.deleteTodo(btnId)
    viewtodoList.displayTodos();
})

//document.getElementById('hid_id1').addEventListener('click',function(){
//    console.log('ddddd');
//})
