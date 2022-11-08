class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todos.todo.push(todo);  
        /* ttodos has the Array data type.. 
        since we want to add new todo object into the current array we can call the .push() with the todo object as the parameter */

    }

    delete_todo(id){
        // Your code here
        this.todos.todo = this.todos.todo.filter((todo,index) => index != id);
    }

    update_todo(id, todo){
        // Your code here
        this.todos.todo = this.todos.todo.map((currentTodo,index) => {
            if(index === id)
                return todo;
            return currentTodo;
        })
    }
}


module.exports= todoservice;