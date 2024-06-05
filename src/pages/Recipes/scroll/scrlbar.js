import Flickity from "react-flickity-component";
import s from './scroll.scss'
import {RecipeShortInfo} from "../recipeCard/RecipeShortInfo";
import React from "react";

export const Scroll =(props) => {
    const data = props.props
    const colors=[
        '#f59760',
        '#eaf1f3',
        '#e5e6c7',
         '#fbdbcf',
        '#f59760',
        '#eaf1f3',
        '#e5e6c7',
        '#fbdbcf',
    ]
    return (
        <div className="chin" style={s} >
            <Flickity elementType="div" options={{pageDots: true, initialIndex: 1, freeScroll: true, draggable: true}} reloadOnUpdate>
                {data.map((el, index) => {

                    return (
                            <RecipeShortInfo el={el} key={index} color={colors[index]}/>

                    )
                })}
            </Flickity>
        </div>
    );
}
