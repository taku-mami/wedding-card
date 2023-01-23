import {Grid, Typography} from '@mui/material';
import React from 'react';

const MapComponent = () => (
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
                오시는 길
            </Typography>
        </Grid>
        <Grid item sx={{
            width: '375px'
        }}>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.2em',
                fontWeight: 'bold',
            }}>
                서울시 서대문구 연세대학교 알렌관
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                서울 서대문구 신촌동 134 (서대문구 연세로 50)
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                02-2123-4101
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.2em',
                fontWeight: 'bold',
            }}>
                버스
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                연대앞, 세브란스병원앞, 이대부중, 이대후문 등에서 하차 후 도보 5분~15분
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                153, 163, 171, 6714, 7017, 7024, 서대문03, 서대문04, 서대문05
            </Typography>
        </Grid>
        <Grid item sx={{
            width: '375px'
        }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6048775236627!2d126.93787733086855!3d37.56437196740523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c988f69f9ad57%3A0x2c4970410ce2a470!2z64yA7ZWc66-86rWtIOyEnOyauO2KueuzhOyLnCDsi6DstIzrj5kg7Jew7IS464yA7ZWZ6rWQIOyVjOugjOq0gA!5e0!3m2!1sko!2sjp!4v1671810972827!5m2!1sko!2sjp"
                width="100%" height="400" frameBorder="0" allowFullScreen>
            </iframe>
        </Grid>
    </Grid>
);


export default MapComponent;