import React from 'react'

const Category = () => {
  return (
    <div className="absolute right-0 top-13 text-[18px] w-[250px] shadow-cyan-950 shadow-lg z-10 bg-amber-300 p-4 md:p-10 font-semibold">
        <ul>
        <li className="border-b-1 p-1 border-amber-200 hover:bg-amber-400 active:bg-amber-400"><a href="#action">Action</a></li>
        <li className="border-b-1 p-1 border-amber-200 hover:bg-amber-400 active:bg-amber-400"><a href="#comedy">Comedy</a></li>
        <li className="border-b-1 p-1 border-amber-200 hover:bg-amber-400 active:bg-amber-400"><a href="#drama">Drama</a></li>
        <li className="border-b-1 p-1 border-amber-200 hover:bg-amber-400 active:bg-amber-400"><a href="#horror">Horror</a></li>
        <li className="border-b-1 p-1 border-amber-200 hover:bg-amber-400 active:bg-amber-400"><a href="#romance">Romance</a></li>
        <li className="border-b-1 p-1 border-amber-200 hover:bg-amber-400 active:bg-amber-400"><a href="#sci-fi">Sci-Fi</a></li>
        <li className="border-b-1 p-1 border-amber-200 hover:bg-amber-400 active:bg-amber-400"><a href="#thriller">Thriller</a></li>
        <li className="border-b-1 p-1 border-amber-200 hover:bg-amber-400 active:bg-amber-400"><a href="#animation">Animation</a></li>
        </ul>
    </div>
  )
}

export default Category
