import type { Component, JSX } from "solid-js"

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input {...props} class='rounded border-indigo-500 ring-indigo-500 border-2 focus:border-indigo-500' />
  )
}

export default Input;
