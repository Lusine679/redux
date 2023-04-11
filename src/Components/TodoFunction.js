import { useEffect, useState } from "react"
import List from "./Components/List"






export default  function TodoFunction() {
  const [listItem, setListItem] = useState("")

  const[todo, SetTodo] = useState([

  ])


    const handleaddToList = (props) => {
      SetTodo((prev) => [...prev, props] )
    }


  return (
    <div>
      <input
        onChange={e => setListItem(e.target.value)}
      />

      <button onClick={() => handleaddToList({name : listItem, canEdit : false})}>
        Add
      </button>

      <div>
        {
        todo.map((item, index) => {
          return (
            <div key={index}>
                <div> {item.name}</div>
                <div> {item.canEdit}</div>

            
            </div>
          
          )
        } )
        }
      </div>
    </div>
  )
} 