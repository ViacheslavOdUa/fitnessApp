import React from 'react';
import s from './BodyPart.scss'

import icon from '../../assets/icons/icon.png';
import {Stack, Typography} from "@mui/material";
import Icon from "../../assets/icons/icon.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const baseClassName = 'BodyPart'
    const className = `${baseClassName} ${bodyPart=== item ? 'Act' : ''}`;
    const setter = () =>{
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setBodyPart(item);
    }
    return(
        <div className={className}  style={s} onClick={setter}>
            <img src={icon} alt="dumbbell" style={{width: '40px', height: '40px'}}/>
            <div>
                {item}
            </div>
        </div>
    )
}

const BodyPark= ({item, setBodyPart, bodyPart}) => (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
);

export default BodyPart;
