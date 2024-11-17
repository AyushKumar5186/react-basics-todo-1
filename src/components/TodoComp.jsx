import todoImg from "../assets/todoImg.svg"
import edit from '../assets/edit.svg'
import { useState } from "react"

const TodoComp = ({todo, index, setTodos}) => {
  const [inputHidden, setInputHidden] = useState(true)

  const [newTitle, setNewTitle] = useState('')


  const handleDelete = () => {
    setTodos((prevtodos) => prevtodos.filter((t)=> t.id !== todo.id))
  }
  const handleEdit = ()=> {
    setInputHidden(!inputHidden)
  }

  const handleSave = ()=> {
    setInputHidden(true)
    if (newTitle !== '') {
    todo.title = newTitle
    }
    setNewTitle('')
    console.log(newTitle)
  }

  return (
    <div className="w-64 min-h-28 overflow-hidden bg-transparent border-2 rounded-md  shadow-xl 
    shadow-gray-800 p-3 h-full">
      <div className="text-white/70 text-xl font-semibold"
      >
        <div>
          <div className="flex justify-between mb-2">
            <img src={todoImg} alt="Todo"
              className="w-7"
            />
            <img src={edit} alt="Edit"
            onClick={handleEdit}
            className="cursor-pointer w-5 hover:w-6" />
          </div>
          <div className="flex justify-between">
          <div className=" ">
            <h4
            className= {`max-w-32 ${
            inputHidden ? "block" : "hidden"
            } overflow-x-auto scrollbar-hide`}
            >{todo.title}</h4>
            <input type="text"
            maxlength="50"
            value={newTitle}
            onChange={(e)=> setNewTitle(e.target.value)}
            className= {`max-w-32 ${
            inputHidden ? "hidden" : "block"
            } bg-transparent border-2 border-black rounded-full pl-2 text-lg`} />
          </div>
          <div>
            {
              inputHidden ?
            <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-sm font-bold outline-none rounded-lg hover:px-5 hover:bg-red-600 transition-all duration-200"
            >Delete</button>

            :
            <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-sm font-bold outline-none rounded-lg hover:px-5 hover:bg-green-700 transition-all duration-200"
            >Save</button>

            }
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoComp