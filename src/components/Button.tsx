import { Component, JSX } from "solid-js";

const Button: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      class='bg-indigo-500 px-3 py-2 rounded-lg text-white hover:bg-indigo-600
      font-normal tracking-wide focus:ring-indigo-500 focus:ring-1'
    >
      {children}
    </button>
  )
}

export default Button;
