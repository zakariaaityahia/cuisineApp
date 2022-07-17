import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import './Popular.css';
import { Link } from "react-router-dom";


function Popular() {

  const [popular, setPopular] = useState([]);


  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {

    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));  
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);

      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes))
      setPopular(data.recipes)
    }
  }


  return (
    <div>
        <div className="Wrapper">
          <h3>Popular pics</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
        }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="Card">
                <Link to={'/recipe/' + recipe.id}>
                <p className="recipeTitle">{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
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


export default Popular