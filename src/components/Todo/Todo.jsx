import { useState } from "react"

export const Todo = ({id,text,isComplated,deleteFunc,editFunc}) => {
  

  let [line,setLine] = useState({
    linethrough: false,
  });

  let lineStyle = {
    textDecoration: line.linethrough ? "line-through" : "none"
  };

  function checkInput() {
    setLine({
      line: !line.linethrough,
    })
  }

  return(
    <>
      <li className="flex items-center justify-between max-w-[700px] w-full px-4 py-2 border-2 rounded-md bg-white" data-id={id}>
        <div className="flex items-center gap-4">
          <input className="w-[18px] h-[18px]" onChange={checkInput} type="checkbox" checked={isComplated} />
          <p className="m-0 font-semibold text-lg" >{text}</p>
        </div>
        <div className="flex items-center gap-3 w-[190px]">
          <button onClick={() => editFunc(id)}  className="max-w-[80px] w-full px-2 py-1 font-bold text-white border-2 rounded-md border-blue-500 bg-blue-400" type="button" data-id={id} >Edit</button>
          <button onClick={() => deleteFunc(id)}  className="max-w-[100px] w-full px-2 py-1 font-bold text-white border-2 border-red-800 rounded-md bg-red-500" type="button" data-id={id} >Delete</button>
        </div>
      </li>
    </>
  )
}