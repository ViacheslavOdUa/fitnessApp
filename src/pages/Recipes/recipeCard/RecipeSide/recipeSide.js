import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './recipeSide.scss'
import {Ingredients} from "./Ingredients/Ingredients";
import {ItemCard} from "./Item/item";
import {Steps} from "./Steps/Steps";

export const RecipeSide = () => {
  const [recipeInfo, setRecipeInfo] = useState();
  const [recipeCalories, setRecipeCalories] = useState();
  const { id } = useParams();
  let baseURL = 'https://api.spoonacular.com'
  let apiKey= '73f3eac60a9f447d8d7e39438747afd3'
  useEffect(() => {
    const getRecipeData = async()=>
    {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?addRecipeInformation=true&apiKey=${apiKey}`);
      const data = await response.json();

      setRecipeInfo(data)
    };
    const getCaloriesData = async()=>
    {

      const response = await fetch(`${baseURL}/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`);
      const data = await response.json();

      setRecipeCalories(data)
    };

      getCaloriesData(), getRecipeData()
  }, []);

  if (!recipeCalories||!recipeInfo) return <div>No Data</div>;
  // якщо немає ніяких даних - виводить ,, немає даних ,,

  return (
     <div className={'item-wrappere'}>

         <ItemCard el={recipeInfo} nut={recipeCalories} elem = {recipeInfo.instructions}/>
         <Ingredients ingredients={recipeInfo.extendedIngredients}/>
       <Steps steps={recipeInfo.analyzedInstructions[0].steps}/>


     </div>
  );
};
//lg - large screens - розміри на великих екранах, xs - xtrasmall - на дуже малих mt - margin top


