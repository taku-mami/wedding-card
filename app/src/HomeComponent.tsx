import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import './styles.css';
// @ts-ignore
import MainImage_1 from './assets/images/wedding_home_1.jpeg';
// @ts-ignore
import MainImage_2 from './assets/images/wedding_home_2.jpeg';
// @ts-ignore
import MainImage_3 from './assets/images/wedding_home_3.jpeg';

const HomeComponent = () => {
    const [currentImage, setCurrentImage] = useState(MainImage_1);
    const [fade, setFade] = useState('in');

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage === MainImage_1) {
                setCurrentImage(MainImage_2);
            } else if (currentImage === MainImage_2) {
                setCurrentImage(MainImage_3);
            } else {
                setCurrentImage(MainImage_1);
            }
        }, 7000);
        return () => clearInterval(interval);
    }, [currentImage]);

    useEffect(() => {
        if (fade === 'in') {
            setTimeout(() => {
                setFade('out');
            }, 6000);
        } else if (fade === 'out') {
            setTimeout(() => {
                setFade('in');
            }, 1000);
        }
    }, [fade]);


    return (
        <div id={'home'}>
            <Box className={(fade === 'in') ? "fade-in" : "fade-out"}
                 sx={{
                     background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${currentImage}) no-repeat top center`,
                     backgroundSize: 'contain',
                     backgroundAttachment: 'fixed',
                     height: '100vh',
                 }}>
                <Container sx={{
                    display: 'flex',
                    height: '150%',
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
                                fontSize: '2.9em',
                                color: '#fff',
                                textShadow: '2px 2px 2px rgb(0 0 0 / 40%)',
                            }}>
                                Sungtak & Mami
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{
                                fontFamily: 'Gugi',
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
                                2023. 04. 22. (SAT) PM 12:00
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
        </div>
    );
}

export default HomeComponent;