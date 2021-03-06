const uuidv4 = require('uuid/v4');
// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [
    {
      id: uuidv4(),
      text: 'hey',
      completed: true
    },
    {
      id: uuidv4(),
      text: 'ho',
      completed: true
    },
    {
      id: uuidv4(),
      text: 'let’s go',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'eggHead Redux Course 23',
      completed: true
    },
    {
      id: uuidv4(),
      text: 'eggHead Redux Course 24',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'eggHead Redux Course 25',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'eggHead Redux Course 26',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'eggHead Redux Course 27',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'eggHead Redux Course aaagh',
      completed: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!');
    // }
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: uuidv4(),
      text,
      completed: false
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
