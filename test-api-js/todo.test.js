

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    /*
        deleteing the todo from the currentTodo list and comparing the length of old todo list with the new length
    */
        test("delete_todos" ,()=>{
            const id = 1;
            const lengthBefore = todo_service.todos.todo.length;
            todo_service.delete_todo(id);
            expect(todo_service.todos.todo.length ).toEqual(lengthBefore -1 );
        })
        
    
        /*
            updating the todo list data at index 1 with the todo object. 
        */
        test("update Todo",() => {
            const id = 1;
            const todo = {
                "title": "T1",
                "description": "D1",
                "done": true
            };
            todo_service.update_todo(id,todo);
            expect(todo_service.todos.todo[id]).toEqual(todo);
        })   

    // Write all your test cases here that corresponds to software requirements


});