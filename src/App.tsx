import { Component, createSignal, For, JSX } from 'solid-js';
import Button from './components/Button';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { Todo } from './interfaces';


const App: Component = () => {
  const [inputValue, setInputValue] = createSignal('');
  const [todos, setTodos] = createSignal<Todo[]>([]);

  const handlerInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    setInputValue(e.currentTarget.value);
  }

  const addTodo = () => {
    setTodos((prev) => 
      [{ id: crypto.randomUUID(), title: inputValue(), completed: false }, ...prev]);
    setInputValue('');
  }

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id); 
    });
  }
  
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id)
          return { ...todo, completed: !todo.completed};
        return todo;
      });
    });
  }

  return (
    <div>
      <div class='flex justify-center'>
        <Input type='text' onInput={handlerInput} />
        <Button onClick={addTodo}>ADD</Button>
      </div>
      <div class='flex flex-col items-center mt-4 space-y-2'>
        <For each={todos()}>
          {(todo) => <TodoItem onToggle={() => toggleTodo(todo.id)} onDelete={() => deleteTodo(todo.id)} todo={todo} />}
        </For>
      </div>
    </div>
  );
};

export default App;
