import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
// @ts-ignore
import GroomImage from './assets/images/groom.jpg';
// @ts-ignore
import BrideImage from './assets/images/bride.png';

const temp = () => (
    <div className="ww-section" id="couple">
        <div className="container">
            <h2 className="h1 text-center pb-3 ww-title">
                {/*style="font-family: 'Noto Serif KR', serif;"*/}
                신랑 & 신부
            </h2>
            <div className="row text-center">
                <div className="col-md-6">
                    <div className="mt-3">
                        <h3 className="h2 ww-title">
                            {/*style="font-family: 'Sunflower', sans-serif; font-size:1.5em"*/}
                            성탁</h3>
                        <img alt="Groom" className="img-fluid" src="images/pic8.jpeg"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mt-3">
                        <h3 className="h2 ww-title">
                            {/*style="font-family: 'Sunflower', sans-serif; font-size:1.5em"*/}
                            마미
                        </h3>
                        <img alt="Bride" className="img-fluid" src="images/pic9.jpeg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const IntroduceComponent = () => (
    <Container>
        <Grid container direction={'column'}
              spacing={5}
              sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
        >
            <Grid item>
                <Typography sx={{
                    fontFamily: '"Noto Serif KR", serif',
                    fontSize: '2.5em',
                }}>
                    신랑 & 신부
                </Typography>
            </Grid>
            <Grid item>
                <Grid container direction={'row'}
                      spacing={5}
                      sx={{
                          justifyContent: 'center',
                          alignItems: 'center',
                      }}
                >
                    <Grid item xs={6}>
                        <Box sx={{
                            background: `url(${GroomImage})`,
                            width: '100px',
                        }}/>
                        <Typography sx={{
                            fontFamily: '"Sunflower", sans-serif',
                            fontSize: '1.5em',
                        }}>
                            타쿠
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{
                            fontFamily: '"Sunflower", sans-serif',
                            fontSize: '1.5em',
                        }}>
                            마미
                        </Typography>
                        <Box sx={{
                            background: `url(${BrideImage})`,
                            minWidth: '100px',
                        }}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default IntroduceComponent;