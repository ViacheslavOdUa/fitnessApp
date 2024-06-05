
import React from "react";
import fat from '../../../../../assets/icons/free-icon-fat-1951553.png'
import protein from '../../../../../assets/icons/free-icon-proteins-780118.png'
import kcal from '../../../../../assets/icons/free-icon-kcal-3525308.png'
import carbs from '../../../../../assets/icons/free-icon-sugar-4905974.png'
import s from './item.scss'

import {Link} from "react-router-dom";
export const ItemCard = ({el, nut})=>{

    return (
        <div className={'item-wrapper'} style={s}>

            <Link className={'link'} style={s} to={'/recepies'}>Back</Link>
            <div className={'сard'} key={el.id}>

                <img src={el.image} alt={el.title}/>
                <h4>
                    {el.title}
                </h4>
                <div className={'nutrition'}>
                    <h5> <img src={kcal}/> - {nut.calories} </h5>
                    <h5>
                        <img src={carbs}/> - {nut.carbs}
                    </h5>
                    <h5>
                        <img src={fat}/>  {nut.fat}
                    </h5>
                    <h5>
                        <img src={protein}/> - {nut.protein}
                    </h5>
                </div>
                <h4>
                    Ready in {el.readyInMinutes} minutes
                </h4>

            </div>
        </div>

    )
}
