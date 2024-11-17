import { useState } from "react"


const AddTodo = ({ setTodos, id }) => {
  const [title, setTitle] = useState('')


  const handleAddTodo = () => {
    // eslint-disable-next-line react/prop-types
    if (title === "") {
      alert("Please enter a valid todo")
    }
    title !== '' && setTodos((todo) => [...todo,
    {
      id: id,
      title
    }])
    setTitle('')
  }

  return (
    <section className="flex justify-center m-10">
      <div className="flex justify-between gap-6 items-center">
        <div>
          <input
            className="bg-transparent bg-slate-900 rounded-full border-2 focus:border-none outline-none focus:outline-red-500 text-white/50 text-lg w-96 py-3 pl-10 "
            maxlength="50"
            type="text"
            placeholder="Enter your Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="">
          <button className="bg-red-500 text-white font-bold px-8 py-3 rounded-full outline-none hover:bg-red-700 hover:text-lg active:bg-green-500"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>

    </section>
  )
}

export default AddTodo