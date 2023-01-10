import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
// @ts-ignore
import MainImage from './assets/images/wedding.png';

const HomeComponent = () => (
    <Box id={'home'}
         display={'flex'}
         sx={{
             background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${MainImage})`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed',
             height: '100vh',
             minHeight: '480px',
         }}>
        <Container sx={{
            display: 'flex',
            height: '140%',
        }}>
            <Grid container direction={'column'}
                  spacing={5}
                  sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}
            >
                <Grid item>
                    <Typography sx={{
                        fontFamily: '"Great Vibes", cursive',
                        fontSize: '3.3em',
                        color: '#fff',
                        textShadow: '2px 2px 2px rgb(0 0 0 / 40%)',
                    }}>
                        Taku & Mami
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{
                        fontFamily: '"Gugi"',
                        fontSize: '1.2em',
                        letterSpacing: '2px',
                        color: '#fff',
                        textShadow: '2px 2px 2px rgb(0 0 0 / 40%)',
                    }}>
                        | WE ARE GETTING MARRIED |
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{
                        fontFamily: '"Noto Serif KR", serif',
                        fontSize: '1.0em',
                        color: '#fff',
                        textShadow: '2px 2px 2px rgb(0 0 0 / 40%)',
                    }}>
                        2023. 04. 22. (SAT) AM 11:30
                    </Typography>
                    <Typography sx={{
                        fontFamily: '"Noto Serif KR", serif',
                        fontSize: '1.0em',
                        color: '#fff',
                        textShadow: '2px 2px 2px rgb(0 0 0 / 40%)',
                    }}>
                        서울시 서대문구 연세대학교 알렌관
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default HomeComponent;