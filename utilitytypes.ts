interface Todo {
    title: string,
    Description: string
}

const todo1: todo = {
    title = "todo Smaple",
    Description = " description Sample"
}

interface Todo2 {
    title: string,
    Description: string
}

type partialTodo = Partial<Todo>

const todo2: partialTodo
{
    id = 1,
        title = "this is a test"
}

function updateTodo(todo: Todo, fieldToUpdate: Partial<Todo>) {
    return (todo, fieldToUpdate);
}