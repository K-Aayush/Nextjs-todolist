import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo, setTodo] = useState({title: "", desc: ""})

  const addTodo = () => {

  }

  const onChange = (e) => {
    
    setTodo({...todo, [e.target.name]: [e.target.value]} )
  }

  return (
    <div className="my-2 font-semibold text-3xl">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class=" bg-gray-100 rounded-lg p-8 m-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Add a todo</h2>
            <div class="relative mb-4">
              <label for="title" class="leading-7 text-sm text-gray-600">Todo Title</label>
              <input onChange={onChange}  value={todo.title} type="text" id="title" name="title" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="desc" class="leading-7 text-sm text-gray-600">Todo Description</label>
              <input onChange={onChange} value={todo.desc} type="text" id="desc" name="desc" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={addTodo} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit">Add ToDo</button>
          </div>
        </div>
      </section>
    </div>

  )
}
