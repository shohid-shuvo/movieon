import React from 'react'
import MyProps from '../components/MyProps'
import ClickEvent from '../components/ClickEvent';
import OnChange from '../components/OnChange';


const Home = () => {
    // Props Example
    const movieName = ["Inception", "Interstellar", "The Dark Knight", "Memento", "Dunkirk"];
    const movieList = movieName.map((movie, index) => {
        return <MyProps key={index} movie={movie} id={index} />
    });


  return (
    <>
        <section className="bg-gray-300 sdl_section">
            <div className="container">
                <h1 className="text-3xl pb-2 font-bold"> <span className="text-green-600">## Props</span> Delivered From MyProps.jsx</h1>
                <hr />
                {movieList}
            </div>
        </section>

        <ClickEvent />
        <OnChange />
    </>
  )
}

export default Home
