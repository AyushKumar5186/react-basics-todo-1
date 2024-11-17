import TodoComp from "./TodoComp"


const Todolist = ({ todos, setTodos }) => {
  console.log(todos)
  return (
    <div className="bg-slate-700 w-full text-red-500 max-h-96 max-w-[90vw] mx-auto rounded-lg p-3 overflow-y-scroll scrollbar-hide">
      <h3 className="text-center text-2xl font-extrabold z-10 border-2 border-gray-400 rounded-lg py-2">Your Todos</h3>
      <div className="p-5 flex justify-evenly scroll-smooth flex-wrap gap-3">
          { todos.map((todo, index) => (<TodoComp key={index} todo={todo} index={index} setTodos={setTodos}/>)) }
      </div>
    </div>
  )
}

export default Todolist;