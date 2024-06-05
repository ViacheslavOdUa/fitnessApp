import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetails/ExerciseDetail';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Main_recipes} from "./pages/Recipes/mainRecipes/main_recipes";
import  {ExercisesMain} from "./pages/Exercises/Exercises";
import {RecipeSide} from "./pages/Recipes/recipeCard/RecipeSide/recipeSide";

const App = () => (
  <Box  width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<ExercisesMain />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/recepies/:id" element={<RecipeSide />} />
      <Route path="/recepies" element={<Main_recipes />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
