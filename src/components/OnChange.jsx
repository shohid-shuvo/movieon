import {React, useState} from 'react'

const OnChange = () => {

    const [inputValue, setInputValue] = useState("")
    const handleChange = (event) => { setInputValue(event.target.value) }

  return (
    <div className="mt-4 p-8">
        <h2>## Event Handling OnChange</h2>
        <label>Type a text and its going to cloning:</label>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>This is clone: {inputValue}</p>
    </div>
  )
}

export default OnChange
