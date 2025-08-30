import React from 'react'
import { useState, useEffect } from 'react'

const MyProps = ({movie, id}) => {

    // State Example
    const [hasLiked, setHasLiked] = useState(false);
    const likeStatus = !hasLiked ? "not like" : "liked"; 

    // Effect Example
    useEffect( ()  => {
        return console.log(`movie name: ${movie}\nmovie has liked: ${likeStatus}`)    
    })
    
    
  return (
      <span>
            <button className="text-2xl relative text-center bold text-white m-3 p-2 px-4  bg-teal-500 mt-3 "  
            onClick={() => setHasLiked(!hasLiked)}>
            {id + 1}. {movie} 
                <p className={`bg-green-700  mt-2 px-2 absolute right-0 ml-3 {hasLiked ? 'bg-green-700' : 'bg-red-700'}`} > 
                    {hasLiked ? "Liked 👍" : "Like "}
                </p>
            </button>

            
      </span>
  )
}

export default MyProps
