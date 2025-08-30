import {React, useState} from 'react'

const ClickEvent = () => {
    const [isVisible, setIsVisible] = useState(false); 

  return (
    <div className="bg-blue-200 mt-4 p-8">
        <h2>## Event Handling onClick</h2>
      <button  onClick={ () => setIsVisible(!isVisible)}
        className="bg-amber-500 p-3 text-white "
        >
        Click to see details
      </button>
          {isVisible && <p className="mt-2 p-2 bg-black text-white  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci iste quisquam nesciunt architecto molestiae dolor 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci iste quisquam nesciunt architecto molestiae dolor 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci iste quisquam nesciunt architecto molestiae dolor 
          </p> }
    </div>
  )
}

export default ClickEvent
