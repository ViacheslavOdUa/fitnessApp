import s from './recipeShortInfo.scss'
import React from "react";
import {Link} from "react-router-dom";
export const RecipeShortInfo = (({el,index, color})=> {

    return (


            <div className={'сard'} key={index} style={s}>
                <img src={el.image} alt={el.title}/>
                <h4>
                    <Link to={`/recepies/${el.id}`} key={el.id} className="recipe-link">
                    {el.title}
                    </Link>
                </h4>
                <h5>
                    Ready in {el.readyInMinutes} minutes
                </h5>
            </div>

    )

});