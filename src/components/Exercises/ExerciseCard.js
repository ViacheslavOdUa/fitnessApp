import React from 'react';
import { Link } from 'react-router-dom';
import { Button,} from '@mui/material';
import s from './ExerciseCard.scss'
const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" style={s} to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <div className={'block'} style={s} >
      <Button className={'mybutton'} style={s}>
        {exercise.target}
      </Button>
    </div>
    <div className={'info'} style={s}>
      {exercise.name}
    </div>
  </Link>
);

export default ExerciseCard;
