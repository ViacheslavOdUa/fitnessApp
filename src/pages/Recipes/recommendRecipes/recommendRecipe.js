import {RecipeShortInfo} from "../recipeCard/RecipeShortInfo";
import s from './recommendRecipes.scss'
import ExerciseCard from "../../../components/Exercises/ExerciseCard";
import React, {useEffect, useState} from "react";
export const RecommendRecipe = (props) => {
    const forU = props.props.slice(0, 3);
    const ofTheDay = props.props.slice(3);
        const colors=[
        '#f59760',
        '#eaf1f3',

        '#e5e6c7', '#fbdbcf']


    return(
        <div className={'recommendRecipes'}>
           <div> {forU.map((el, index)=>{
               console.log(index)
                return(
                    <RecipeShortInfo el={el} key={index} color={colors[index]}/>
                )
            })}

           </div>
            <div>
                {ofTheDay.map((el, index)=>{
                    return(
                        <RecipeShortInfo el={el} key={index} color={colors[index]}/>
                    )
                })}
            </div>
           длаылдуьалдыуьалдыуьадлыьуалдыуа
        </div>
    )
}
