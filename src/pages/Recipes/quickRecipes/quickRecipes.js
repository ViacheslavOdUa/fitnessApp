
import s from './quickRecipes.scss'
import React from "react";
import {RecipeShortInfo} from "../recipeCard/RecipeShortInfo";
import Flickity from "react-flickity-component";
export const
    QuickRecipes = ({props}) => {

    const colors=[
        '#f59760',
        '#eaf1f3',
        '#e5e6c7', '#fbdbcf']


    return(

            <Flickity elementType="div" options={{pageDots: true, initialIndex: 2, freeScroll: true}} reloadOnUpdate>
             {props.results.map((el, index)=>{
                return(
                    <RecipeShortInfo el={el} key={index} color={colors[index]}/>
                )
            })}

            </Flickity>


    )
}