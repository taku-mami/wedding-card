import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
// @ts-ignore
import WeddingHallImage from './assets/images/weddinghall.jpeg';
// @ts-ignore
import YonseiImage from './assets/images/yonsei.jpg';


const EventComponent = () => (
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
                초대합니다
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{
                fontFamily: '"Noto Serif KR", serif',
                fontSize: '1.0em',
            }}>
                우리의 인연이 시작된 학교로
            </Typography>
        </Grid>
        <Grid item>
            <Box sx={{
                background: `url(${YonseiImage}) no-repeat top center`,
                backgroundSize: 'contain',
                width: '375px',
                height: '350px',
            }}/>
        </Grid>
        <Grid item sx={{
            width: '375px'
        }}>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.2em',
                fontWeight: 'bold',
            }}>
                웨딩 본식
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                서울시 서대문구 연세대학교 알렌관
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                2023년 4월 22일, 11:30PM
            </Typography>
        </Grid>
        <Grid item>
            <Box sx={{
                background: `url(${WeddingHallImage}) no-repeat top center`,
                backgroundSize: 'contain',
                width: '375px',
                height: '400px',
            }}/>
        </Grid>
    </Grid>
);

export default EventComponent;