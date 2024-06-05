
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {TextField} from "@mui/material";
import {RecommendRecipe} from "../recommendRecipes/recommendRecipe";
import Loader from "../../../components/Loader/Loader";
import {QuickRecipes} from "../quickRecipes/quickRecipes";
import HorizontalScroll, {Scroll, ScrollBar} from "../scroll/scrlbar";
import s from './main_recipes.scss'

export const Main_recipes = () =>{
    const [trivia, setTrivia] = useState({})
    const [quickRecipes, setQuickRecipes] = useState({})
    const [mainRecipes, setMainRecipes] = useState({})
    const [jokes, setJokes] = useState('')
    let baseURL = 'https://api.spoonacular.com'
    let apiKeyt= '45ac786dfb634b51b2eaaec097cf8732'
    let apiKeyMy= '73f3eac60a9f447d8d7e39438747afd3'
    let apiKey = '3eafa5a00c4b43859eb81177e2e47cef'
    const { id } = useParams();
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [find, setFind] = useState('')




    const seacrhData  = async()=>
    {
        //запит на знаходження рецепту
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&offset=0&addRecipeInformation=true&apiKey=45ac786dfb634b51b2eaaec097cf8732`);
        const data = await response.json();
        setSearch(data)
        console.log(data);

    };
    const handleChange = (event) => {
        setQuery(event.target.value);

    };


    useEffect(() => {


        const randomRecipes = async()=>
        {
            //запит на рандомні рецепти, а саме рецепти дня та рекомендовані
            const response = await fetch(`${baseURL}/recipes/random?number=10&apiKey=${apiKey}`);
            const data = await response.json();

            setMainRecipes(data.recipes)
        };
        const quickRecipes = async()=>
        {
            //запит на рандомні рецепти, а саме рецепти що займають близко 20 хвилин приготування
            const response = await fetch(`${baseURL}/recipes/complexSearch?number=5&addRecipeInformation=true&maxReadyTime=20&apiKey=${apiKey}`);
            const data = await response.json();
            setQuickRecipes(data)


        };

        const triviaData = async()=>
        {
            //запит цитату
            const response = await fetch(`${baseURL}/food/trivia/random?&apiKey=${apiKey}`);
            const data = await response.json();
            setTrivia(data.text)


        };

        const jokesData = async()=>
        {
            //запит на жарт
            const response = await fetch(`${baseURL}/food/jokes/random?&apiKey=${apiKey}`);
            const data = await response.json();
            setJokes(data.text)


        };
        randomRecipes(),triviaData(), jokesData(), quickRecipes()
    },[]);

    if (!mainRecipes.length||!trivia||!jokes||!quickRecipes) return <Loader />;

    return (
<div className={'wrap'} style={s}>
    <div className={'main'} style={s}>

        <div className={'searchsefs'}>
            <TextField
                height="76px"
                sx={{
                    input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
                    width: {lg: '1170px', xs: '350px'},
                    backgroundColor: '#fff',
                    borderRadius: '40px',
                    marginBottom: '70px'
                }}
                value={query}
                onChange={handleChange}
                placeholder="Search Recipes"
                type="text"
            />
            <button onClick={seacrhData}>
                press
            </button>

        </div>


        <div className={'text'}>
            <div className={'h2'}> Recipes of the day</div>
            <Scroll props={mainRecipes.slice(0, 5)}/>
        </div>

        <div className={'text'}>
            <div className={'h2'}> Recommend for you</div>
            <Scroll props={mainRecipes.slice(5, 11)}/>
        </div>


        <div style={{
            marginBottom: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h3 className={'text'} style={{width: '70%', textAlign: 'center'}}>
                <h3 style={{marginBottom: '40px'}}> Food Jokes</h3>
                {jokes}
            </h3>
        </div>

        <div className={'text'}>
            <div className={'h2'}> Quick Recipes</div>
            <QuickRecipes props={quickRecipes}/>

        </div>


        <h3 className={'text'}>
            {trivia}
        </h3>


    </div>
</div>
    )
};

