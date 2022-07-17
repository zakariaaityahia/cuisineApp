import React, {useState, useEffect} from 'react'
import './Cuisine.css'
import { motion } from 'framer-motion'
import {  Link, useParams } from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])

  let params = useParams();
 
  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    
    const recipes = await data.json();
    setCuisine(recipes.results)
  }; 
   
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type])
  
  return (
    <motion.div className='Grid'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      {cuisine.map((item) => {
        return (
          <div className='Card' key={item.id}>
            <Link to={'/recipe/' + item.id}>
              <img  src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </div>
           )
      })}
    </motion.div>
  )
}


export default Cuisine