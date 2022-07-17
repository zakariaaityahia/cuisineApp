import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import './Popular.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Veggie() {

  const [veggie, setVeggie] = useState([]);


  useEffect(() => {
    getVeggie();
  }, [])

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));  
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);

      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
      console.log(data)
    }
  }


  return (
    <div>
        <div className="Wrapper">
          <h3>Our vegetarian Pics</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
        }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="Card">
                <Link to={'/recipe/' + recipe.id}>
                  <p className="recipeTitle">{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.image} />
                  <div className="Gradient"></div>
                </Link>
              </div>
              </SplideSlide>
              
            );
          })}
          </Splide>
        </div>
    </div>
  )
}

export default Veggie