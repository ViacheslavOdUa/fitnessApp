import React, {useState} from "react";
import SearchExercises from "../../components/Exercises/SearchExercises";
import Exercises from "../../components/Exercises/Exercises";

export const ExercisesMain = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <div>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </div>
    );
};

