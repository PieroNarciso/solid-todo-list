import { Component, JSX } from "solid-js"
import { Todo } from "../interfaces"

interface TodoItemProps extends JSX.HTMLAttributes<HTMLDivElement> {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: Component<TodoItemProps> = ({ todo, onToggle, onDelete,...props }) => {
  return (
    <div {...props} class='bg-gray-200 w-64 py-2 px-2 flex align-middle justify-between rounded'>
      <div>
        <input onChange={onToggle} checked={todo.completed} type="checkbox"
          class="text-indigo-500 rounded bg-gray-100 focus:ring-indigo-500" />
        <span class="ml-2" classList={{ 'line-through': todo.completed }}>{todo.title}</span>
      </div>
      <button class="text-gray-900" onClick={onDelete}>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem;
