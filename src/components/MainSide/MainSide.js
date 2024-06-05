import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../../assets/images/man-doing-workout-at-gym-free-vector.jpg';
import {Link} from "react-router-dom";

const MainSide = () => (
  <Box sx={{ mt: { lg: '12px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sport. Health. Nutrition.  <br />
      Live better!
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Get healthier with us
    </Typography>
    <Stack>
        <Link to="/exercises"
              style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px'}}>Start Workout</Link>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Health
    </Typography>
    <img src={HeroBannerImage} style={{zIndex: '10000',width: '590px', height: '760px', marginTop:'1px'}} alt="banner" className="hero-banner-img" />
  </Box>
);

export default MainSide;
