import React, { useState } from 'react'

const ChipInput = () => {
  const [chipInput,setChipInput] = useState("");
  const [chipBox, setChipBox] = useState([]);

  const handleChipInputChange = (e)=>{
    if(e.target.value.trim()){
      setChipInput(e.target.value)
    }
  }

  const handleChipKeyUp = (e)=>{
    
    if(e.key === "Enter" && e.target.value !== ""){
      setChipBox(prev=>[...prev,chipInput]);
      setChipInput("");
    }
  }

  const handleRemoveChip = (e,idx)=>{
    chipBox.splice(idx,1);
    setChipBox([...chipBox]);
  }

  return (
    <div className='max-w-md m-auto'>
      <input type="text" value={chipInput} onChange={handleChipInputChange} placeholder='Enter text here ...' className='outline-none p-2 border rounded-md ' onKeyUp={handleChipKeyUp} />
      {
        chipBox.length>0 && <ul className='flex'>
          {
            chipBox.map((ele,idx)=>{
              return <li key={idx}>
                <div className='bg-blue-500 flex ml-2 p-2 rounded-md'>
                  <p>{ele}</p>
                  <span onClick={(e)=>handleRemoveChip(e,idx)}>&#10006;</span>
                </div>
              </li>
            })
          }
        </ul>
      }
    </div>
  )
}

export default ChipInput