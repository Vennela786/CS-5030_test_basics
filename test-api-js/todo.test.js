

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
        adding test_todo with add_todo function..and comparing the last postion of the todo array with the test_todo object
    */
    test("add_todos", () => {
        const test_todo = {
            "title": "T1",
            "description": "D1",
            "done": false
        }
        todo_service.add_todo(test_todo)
        expect(todo_service.get_todos().todo[todo_service.todos.todo.length-1]).toEqual(test_todo);
    })
          // Write all your test cases here that corresponds to software requirements
});