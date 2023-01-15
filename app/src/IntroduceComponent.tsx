import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
// @ts-ignore
import GroomImage from './assets/images/groom.jpg';
// @ts-ignore
import BrideImage from './assets/images/bride.jpg';

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
    <Grid container direction={'column'}
          spacing={3}
          sx={{
              padding: '60px 0',
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
                  spacing={3}
                  sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                  }}
            >
                <Grid item xs={12} sm={6}>
                    <Typography sx={{
                        fontFamily: `'Sunflower', sans-serif`,
                        fontSize: '1.5em',
                        textAlign: 'center',
                    }}>
                        윤성탁
                    </Typography>
                    <Box sx={{
                        position: 'relative',
                        width: '375px',
                        height: '650px',
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            bottom: '20px',
                            right: '20px',
                            background: `url(${GroomImage}) no-repeat center center`,
                            backgroundSize: 'cover',
                            boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.5)',
                            border: '10px solid #8B5E3C',
                        }}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{
                        fontFamily: '"Sunflower", sans-serif',
                        fontSize: '1.5em',
                        textAlign: 'center',
                    }}>
                        야마모토 마미
                    </Typography>
                    <Box sx={{
                        position: 'relative',
                        width: '375px',
                        height: '650px',
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            bottom: '20px',
                            right: '20px',
                            background: `url(${BrideImage}) no-repeat center center`,
                            backgroundSize: 'cover',
                            boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.5)',
                            border: '10px solid #8B5E3C',
                        }}/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default IntroduceComponent;